import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosDesactivateGuard } from '../guards/alunos-desactivate.guard';


const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
    { path: 'novo', component: AlunosFormComponent },
    { path: ':id', component: AlunoDetalheComponent },
    { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDesactivateGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
