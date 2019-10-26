import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  public find():Observable<EstadoEntity[]> {
    return this.http.get<EstadoEntity[]>( environment.urlSaas+ '/estados');
  }
}

export class EstadoEntity {
  id: number;
  nome: string;
  sigla: string;
}