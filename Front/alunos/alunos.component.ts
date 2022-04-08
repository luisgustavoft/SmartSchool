import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlunoService } from './aluno.service';
import { DisciplinaService } from '../disciplinas/disciplina.service';
import { Disciplina } from '../models/Disciplina';
import { AlunoDisciplina } from '../models/AlunoDisciplina';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

 public modalRef: BsModalRef;
 public alunoForm: FormGroup;
 public titulo = 'Alunos';
 public alunoSelecionado: Aluno;
 public textSimple: string;
 public modo = 'post';
 public listaForm: FormGroup;
 public disciplinas: Disciplina[];
 public alunosDisciplinas: AlunoDisciplina[];
 public disciplinaid: number;

 public alunos: Aluno[];

 openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
 }

constructor(private fb: FormBuilder,
            private modalService: BsModalService,
            private alunoService: AlunoService,
            private disciplinaService: DisciplinaService,

            ) {
   this.criarForm();
}

  ngOnInit() {
    this.carregarAlunos();
    this.carregarDisciplinas();
  }

  carregarAlunos() {
     this.alunoService.getAll().subscribe(
       (alunos: Aluno[]) => {
         this.alunos = alunos;
       },
       (erro: any) => {
         console.error(erro);
       }
     )
  }

  carregarDisciplinas() {
    this.disciplinaService.getAllDisciplina().subscribe(
      (disciplinas: Disciplina[]) => {
        this.disciplinas = disciplinas;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
   }

  criarForm() {
  this.alunoForm = this.fb.group({
   id: [''],
   nome: ['', Validators.required],
   sobrenome: ['', Validators.required],
   telefone: ['', Validators.required],
   disciplinaid: ['']
  });
}

  salvarAluno(alunosDisciplinas: Aluno){
    (alunosDisciplinas.id === 0) ? this.modo = 'post' : this.modo = 'put';

       var alunoDisc = new AlunoDisciplina();
        alunoDisc.disciplinaId =  this.disciplinaid;

       var alunosDisc : AlunoDisciplina[] = [];
       alunosDisc.push(alunoDisc);
       alunosDisciplinas.alunosDisciplinas = alunosDisc;
       this.alunoService[this.modo](alunosDisciplinas).subscribe(
      (retorno: Aluno) => {
       console.log(retorno);
      this.carregarAlunos();
    },

      (erro: any) => {
      console.log(erro);
    }
  );
}

  deletarAluno(id: number){
  this.alunoService.delete(id).subscribe(
    (model: any) => {
      console.log(model);
      this.carregarAlunos();
    },
    (erro: any ) => {
      console.error(erro);
    }
  );
}

  alunoSubmit(){
    this.salvarAluno(this.alunoForm.value);
   }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);

    }

    alunoNovo(){
      this.alunoSelecionado = new Aluno();
      this.alunoForm.patchValue(this.alunoSelecionado);

      }

    voltar(){
      this.alunoSelecionado = null;
    }
  }
