import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { VendedorEntity } from './vendedor.service';
import { ClienteEntity } from './cliente.service'


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  public find(): Observable<PedidoEntity[]> {
    return this.http.get<PedidoEntity[]>(environment.urlSaaS + '/pedido');
  }
  public save(pedido: PedidoEntity) {
    if (pedido.id) {
      return this.update(pedido);
    } else {
      return this.create(pedido);
    }
  }
  public delete(id: number): Observable<PedidoEntity> {
    return this.http.delete<PedidoEntity>(environment.urlSaaS + '/pedido/' + id);
  }
  private create(pedido: PedidoEntity): Observable<PedidoEntity> {
    return this.http.post<PedidoEntity>(environment.urlSaaS + '/pedido', pedido);
  }
  private update(pedido: PedidoEntity): Observable<PedidoEntity> {
    return this.http.put<PedidoEntity>(environment.urlSaaS + '/pedido/' + pedido.id, pedido);
  }

}

export class PedidoEntity {
  id: number;
  codigo: string;
  cliente: ClienteEntity;
  vendedor: VendedorEntity;
  dtpedido: Date;


}