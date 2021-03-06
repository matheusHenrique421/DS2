import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  public find(): Observable<EstadoEntity[]> {
    return this.http.get<EstadoEntity[]>(environment.urlSaaS + '/estado');

  }
  public save(estado: EstadoEntity) {
    if (estado.id) {
      return this.update(estado);
    } else {
      return this.create(estado);
    }
  }
  public delete(id: number): Observable<EstadoEntity> {
    return this.http.delete<EstadoEntity>(environment.urlSaaS + '/estado/' + id);
  }
  private create(estado: EstadoEntity): Observable<EstadoEntity> {
    return this.http.post<EstadoEntity>(environment.urlSaaS + '/estado', estado);
  }
  private update(estado: EstadoEntity): Observable<EstadoEntity> {
    return this.http.put<EstadoEntity>(environment.urlSaaS + '/estado/' + estado.id, estado);
  }
}

export class EstadoEntity {
  id: number;
  nome: string;
  sigla: string;
}