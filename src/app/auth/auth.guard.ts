import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.authService.redirectUser();
      return false;
    } else {
      return true;
    }
  }
}
