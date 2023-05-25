import {Component} from '@angular/core';
import {LoginService} from '../_Services/login.service';
import {UserIdentifiers} from "../_Interfaces/userIdentifiers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  message: string = '';
//this.loginService.errorMessages
  identifier: UserIdentifiers = {email: '', password: ''}

  authenticate(): void {
    this.loginService.checkLogin(this.identifier)
      .subscribe(response => {
        this.message = this.loginService.errorMessages
        if (response) {
          localStorage.setItem('jwt', response.token)
          localStorage.setItem('id', response.id)
          localStorage.setItem('email', response.email)
          this.router.navigate(['/dashboard'], {state: {data: {jwt: response.token}}})
        }
      })

  }

}
