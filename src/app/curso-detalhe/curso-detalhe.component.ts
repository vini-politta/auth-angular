import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;
  constructor(private route: ActivatedRoute,
              private cursoService: CursosService,
              private router: Router) {
    // this.id = this.route.snapshot.params.id;
    // console.log(this.route);

   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params.id;

        this.curso = this.cursoService.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
