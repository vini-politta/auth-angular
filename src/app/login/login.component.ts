import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  fazerLogin() {
    console.log(this.usuario);

  }

}
