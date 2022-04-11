import { Component, OnInit, TemplateRef } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DisciplinaService } from './disciplina.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

   public disciplinaForm: FormGroup;
   public modalRef: BsModalRef;
   public disciplinaSelecionada: Disciplina;
   public modo = 'post';

   public disciplinas: Disciplina[];

   openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private disciplinaService: DisciplinaService) {
                this.criarForm();
               }

  ngOnInit() {
    this.carregarDisciplinas();
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
    this.disciplinaForm = this.fb.group({
     id: [''],
     nome: ['', Validators.required],
    });
  }

    salvarDisciplina(disciplina: Disciplina){
   (disciplina.id === 0) ? this.modo = 'post' : this.modo = 'put';
    this.disciplinaService[this.modo](disciplina).subscribe(
      (retorno: Disciplina) => {
        console.log(retorno);
        this.carregarDisciplinas();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

    deletarDisciplina(id: number){
    this.disciplinaService.delete(id).subscribe(
      (model: any) => {
        console.log(model);
        this.carregarDisciplinas();
      },
      (erro: any ) => {
        console.error(erro);
      }
    );
  }

    disciplinaSubmit(){
      this.salvarDisciplina(this.disciplinaForm.value);
    }

    disciplinaSelect(disciplina: Disciplina){
      this.disciplinaSelecionada = disciplina;
      this.disciplinaForm.patchValue(disciplina);
      }

      disciplinaNova(){
        this.disciplinaSelecionada = new Disciplina();
        this.disciplinaForm.patchValue(this.disciplinaSelecionada);
        }

      voltar(){
        this.disciplinaSelecionada = null;
      }

      clickEvent(){
        console.log("clicou")
      }
    }
