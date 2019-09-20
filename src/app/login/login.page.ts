import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login();
      this.loginForm.reset();
      this.authService.redirectUser();
    }
  }

}
