import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class Usuario1Guard implements CanActivate, CanLoad {

  constructor(private usuarioService: UsuarioService) {}


  canLoad(): Observable<boolean> | Promise<boolean> | boolean {

    return this.usuarioService.validaToken();

  }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
}
