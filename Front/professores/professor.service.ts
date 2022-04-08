import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from '../models/Professor';
import { Disciplina } from '../models/Disciplina';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  baseUrl = `${environment.UrlPrincipal}/api/professor`;

constructor(private http: HttpClient) { }

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.baseUrl}`);
  }

  getAllDisciplina(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.baseUrl}`)
  }

  getDisciplina(): Observable<Disciplina>{
    return this.http.get<Disciplina>(`${this.baseUrl}`)
  }

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/${id}`);
  }

  post(professor: Professor) {
    return this.http.post(`${this.baseUrl}`, professor);
  }

  put(professor: Professor) {
    return this.http.put(`${this.baseUrl}/${professor.id}`, professor);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
