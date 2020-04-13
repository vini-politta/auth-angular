import { FormsModule } from '@angular/forms';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';


@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent, CursoNaoEncontradoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ],
  providers: []
})
export class CursosModule { }
