import { AlunoDisciplina } from './AlunoDisciplina';

export class Aluno {
alunosDisciplinas: AlunoDisciplina[];

 constructor() {
  this.id = 0;
  this.nome = '';
  this.sobrenome = '';
  this.telefone = 0;
  this.disciplinaid = 0;

}
  id: number;
  nome: string;
  sobrenome: string;
  telefone: number;
  disciplinaid: number;
}

