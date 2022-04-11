import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disciplina } from '../models/Disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  baseUrl = `${environment.UrlPrincipal}/api/disciplina`;

constructor(private http: HttpClient) { }

    getAllDisciplina(): Observable<Disciplina[]> {
        return this.http.get<Disciplina[]>(`${this.baseUrl}`);
    }

    getById(id: number): Observable<Disciplina> {
        return this.http.get<Disciplina>(`${this.baseUrl}/${id}`);
    }

    post(disciplina: Disciplina){
        return this.http.post(`${this.baseUrl}`, disciplina);
    }

    put(disciplina: Disciplina){
        return this.http.put(`${this.baseUrl}/${disciplina.id}`, disciplina);
    }

    delete(id: number){
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
