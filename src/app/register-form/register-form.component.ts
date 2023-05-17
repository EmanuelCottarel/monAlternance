import { Component } from '@angular/core';
import {LoginService} from "../_Services/login.service";
import {User} from "../_Interfaces/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(private loginService : LoginService) {
  }

  user:User = {
    'email':'',
    'plainPassword':'',
    'firstName':'',
    'lastName':''
  };
  register(){

  }

  message: string = '';
}
