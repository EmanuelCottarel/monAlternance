import {Component, OnInit} from '@angular/core';
import {LoginService} from "../_Services/login.service";
import {NotificationService} from "../_Services/notification.service";
import {User} from "../_Interfaces/user";
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mustMatchValidator} from '../_Validators/must-match.validator'

type userProperties = keyof User;

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router,
  ) {
  }

  user: User = {
    email: '',
    plainPassword: '',
    plainPasswordConfirm: '',
    firstName: '',
    lastName: ''
  };

  registerForm = new FormGroup({
    email: new FormControl(this.user.email, Validators.required),
    firstName: new FormControl(this.user.firstName, Validators.required),
    lastName: new FormControl(this.user.lastName, Validators.required),
    plainPassword: new FormControl(this.user.plainPassword, Validators.required),
    plainPasswordConfirm: new FormControl(this.user.plainPasswordConfirm, Validators.required),
  }, {
    validators: mustMatchValidator
  });

  ngOnInit() {
    console.log(this.registerForm);
  }

  get email() {
    return this.registerForm.get('email')
  }

  get firstName() {
    return this.registerForm.get('firstName')
  }

  get lastName() {
    return this.registerForm.get('lastName')
  }

  get plainPassword() {
    return this.registerForm.get('plainPassword')
  }

  get plainPasswordConfirm() {
    return this.registerForm.get('plainPasswordConfirm')
  }

  register(): void {

    const formValues = this.registerForm.value;

    for (const formProperty in this.registerForm.value){
      for(const userProperty in this.user){
        if (formProperty === userProperty){
          this.user[userProperty as userProperties] = formValues[formProperty as userProperties] as string;
        }
      }
    }

    this.loginService.createUser(this.user)
      .subscribe(el => {
        this.router.navigate(['/login']);
        this.showToasterSuccess();
      })
  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Votre compte a bien été crée', 'Compte crée!');
  }

  message: string = '';
}


