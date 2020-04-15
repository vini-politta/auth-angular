import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDesactivateGuard implements CanDeactivate<AlunosFormComponent> {

  canDeactivate(
      component: AlunosFormComponent,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

      console.log('guarda de desativação');

      return component.podeMudarRota();
}

}
