import { Component, OnInit } from '@angular/core';
import { Lista } from '../models/Lista';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisciplinaService } from '../disciplinas/disciplina.service';
import { Disciplina } from '../models/Disciplina';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

public listaForm: FormGroup;

public lista: Disciplina[];


  constructor(private fb: FormBuilder,
              private disciplinaService: DisciplinaService) {
             this.criarForm()}

  ngOnInit() {

}

  criarForm() {
    this.listaForm = this.fb.group({
     id: [''],
     disciplina: ['']
     });
  }

  carregarDisciplinas() {
    this.disciplinaService.getAllDisciplina().subscribe(
      (disciplinas: Disciplina[]) => {
        this.lista = disciplinas;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }
}


