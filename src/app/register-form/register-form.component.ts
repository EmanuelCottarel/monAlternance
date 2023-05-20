import { Component } from '@angular/core';
import {LoginService} from "../_Services/login.service";
import { NotificationService } from "../_Services/notification.service";
import {User} from "../_Interfaces/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(
    private loginService : LoginService,
    private notificationService : NotificationService,
    private router : Router
    ) {
  }

  user:User = {
    'email':'',
    'plainPassword':'',
    'firstName':'',
    'lastName':''
  };
  register():void{
    this.loginService.createUser(this.user)
      .subscribe(el => {
        this.router.navigate(['/login']);
        this.showToasterSuccess();

      })

  }

  showToasterSuccess(){
    this.notificationService.showSuccess('Votre compte a bien été crée' , 'Compte crée!');
  }

  message: string = '';
}
