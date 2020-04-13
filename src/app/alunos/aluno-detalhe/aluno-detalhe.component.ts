import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
              private alunoService: AlunosService,
              private router: Router ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params.id;

        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
