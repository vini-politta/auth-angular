import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth-guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    // canActivateChild: [AlunosGuard],
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [CursosGuard], },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
