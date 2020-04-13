import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Vinicius', email: 'vinicius@teste.com'},
    {id: 2, nome: 'Amanda', email: 'amanda@teste.com'},
    {id: 1, nome: 'Carol', email: 'carol@teste.com'}

  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.alunos.length; index++) {
      const aluno = this.alunos[index];
      // tslint:disable-next-line: triple-equals
      if (aluno.id == id) {
        return aluno;
      }

    }
  }

  constructor() { }
}
