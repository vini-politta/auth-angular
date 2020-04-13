import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams.pagina;
      }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}})
  }

}
