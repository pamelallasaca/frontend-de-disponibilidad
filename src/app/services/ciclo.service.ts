import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/ciclo';

const baseUrl = 'http://localhost:8090/rest/list';

@Injectable({
  providedIn: 'root',
})
export class CicloService {
  constructor(private http: HttpClient) {}

  listarCiclos(): Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>(baseUrl + '/listCiclos');
  }
}