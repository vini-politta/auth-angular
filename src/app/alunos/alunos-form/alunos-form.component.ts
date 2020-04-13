import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  aluno: any = {};
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private alunoService: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params.id;

        this.aluno = this.alunoService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    
  }

}
