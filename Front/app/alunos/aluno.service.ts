import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/Aluno';
import { Disciplina } from '../models/Disciplina';
import { AlunoDisciplina } from '../models/AlunoDisciplina';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl = `${environment.UrlPrincipal}/api/aluno`;

constructor(private http: HttpClient) { }

   getAll(): Observable<Aluno[]> {
     return this.http.get<Aluno[]>(`${this.baseUrl}`);

   }

   getAllDisciplina(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.baseUrl}`);
  }

   getById(id: number): Observable<Aluno> {
     return this.http.get<Aluno>(`${this.baseUrl}/${id}`);
   }

   post(alunosDisciplinas: Aluno){
     return this.http.post(`${this.baseUrl}`, alunosDisciplinas);
   }

   put(alunosDisciplinas: Aluno){
     return this.http.put(`${this.baseUrl}/${alunosDisciplinas.id}`, alunosDisciplinas);
   }

   delete(id: number){
     return this.http.delete(`${this.baseUrl}/${id}`);
   }
}
