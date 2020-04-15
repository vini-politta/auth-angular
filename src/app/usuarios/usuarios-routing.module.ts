import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';


const routes: Routes = [

  { path: '', component: UsuariosFormComponent },
  { path: ':id', component: UsuarioListaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
