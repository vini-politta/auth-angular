import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAuth = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'vini@teste.com' && usuario.senha === '1234') {
      this.usuarioAuth = true;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    }else {
      this.usuarioAuth = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioAutenticado() {
    return this.usuarioAuth;
  }

}
