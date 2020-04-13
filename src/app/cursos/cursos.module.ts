import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CursosRoutingModule } from './cursos-routing.module';
import { RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
