import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CidadeEntity } from './cidade.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public find():Observable<ClienteEntity[]> {
    return this.http.get<ClienteEntity[]>( environment.urlSaas+ '/cliente');
  }
  public save( cliente: ClienteEntity ) {
    if (cliente.id) {
      return this.update( cliente );
    } else {
      return this.create( cliente );
    }
  }
  public delete( id: number ):Observable<ClienteEntity> {
    return this.http.delete<ClienteEntity>( environment.urlSaas+ '/cliente/'+ id);
  }
  private create( cliente: ClienteEntity ):Observable<ClienteEntity> {
    return this.http.post<ClienteEntity>( environment.urlSaas+ '/cliente', cliente);
  }
  private update( cliente: ClienteEntity ):Observable<ClienteEntity> {
    return this.http.put<ClienteEntity>( environment.urlSaas+ '/cliente/'+ cliente.id, cliente);
  }

}

export class ClienteEntity {
  id: number;
  codigo: string;
  nome: string;
  email: string;
  cidade: CidadeEntity;
}