import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()


export class AlunosGuard implements CanActivateChild {

  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      console.log('guarda de rota filha');
      console.log(route);
      console.log(state);

      if ( state.url.includes('editar')){
      //   alert('Usuario sem acesso');
      //   return false;
       }


      return true;
    }
}
