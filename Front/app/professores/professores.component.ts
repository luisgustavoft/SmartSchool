import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';
import { DisciplinaService } from '../disciplinas/disciplina.service';
import { Disciplina } from '../models/Disciplina';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public modo = 'post;'
  public listaForm: FormGroup;
  public disciplinas: Disciplina[]

  public professores: Professor[];

  voltar() {
    this.professorSelecionado = null;
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService,
              private disciplinaService: DisciplinaService) {
                this.criarForm();
              }

    openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregarProfessores();
    this.carregarDisciplinas();
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
    }

    professorNovo(){
      this.professorSelecionado = new Professor();
      this.professorForm.patchValue(this.professorSelecionado);
    }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
        console.log(this.professores)
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  carregarDisciplinas() {
    this.disciplinaService.getAllDisciplina().subscribe(
      (disciplinas: Disciplina[]) => {
        this.disciplinas = disciplinas;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  criarForm(){
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      disciplina: ['']
     });
  }

  salvarProfessor(professor: Professor){
    (professor.id === 0) ? this.modo = 'post' : this.modo = 'put';
    this.professorService[this.modo](professor).subscribe(
     (retorno: Professor) => {
       console.log(retorno);
       this.carregarProfessores();
     },
     (erro: any) => {
       console.log(erro);
     }
  );
}

 deletarProfessor(id: number){
  this.professorService.delete(id).subscribe(
    (model: any) => {
      console.log(model);
      this.carregarProfessores();
    },
    (erro: any ) => {
      console.error(erro);
    }
  );
}

  professorSubmit(){
    this.salvarProfessor(this.professorForm.value);
  }

}
