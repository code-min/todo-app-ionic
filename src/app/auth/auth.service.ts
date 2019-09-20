import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;

  constructor(private router: Router) { }

  login() {
    this.authenticated = true;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  redirectUser() {
    if(this.authenticated) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
