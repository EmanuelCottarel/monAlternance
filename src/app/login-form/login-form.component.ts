import { Component } from '@angular/core';
import { LoginService } from '../_Services/login.service';
import { UserIdentifiers } from "../_Interfaces/userIdentifiers";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private loginService : LoginService) {
  }

  identifier:UserIdentifiers = {'email':'','password':''}

  authenticate():void{
    this.loginService.checkLogin(this.identifier)
      .subscribe(user => console.log(user))
  }

}