import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Application} from "../../_Interfaces/application";
import {createApplication} from "@angular/platform-browser";
import {ApplicationService} from "../../_Services/application.service";

type applicationProperties = keyof Application;
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {

  constructor(private applicationService : ApplicationService) {
  }

  application: Application = {
    companyName: '',
    submitedAt: '',
    email: '',
    phoneNumber: '',
    webSite: '',
    status:'',
    user: '',
  }

  applicationForm: FormGroup = new FormGroup({
    companyName: new FormControl(this.application.companyName, Validators.required),
    submitedAt: new FormControl(this.application.submitedAt),
    email: new FormControl(this.application.email, Validators.email),
    phoneNumber: new FormControl(this.application.phoneNumber, [Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
    webSite: new FormControl(this.application.webSite),
    status: new FormControl(this.application.status)
  })


  onSubmit(){
    const formValues = this.applicationForm.value;

    for (const formProperty in formValues){
      for(const applicationProperty in this.application){
        if (formProperty === applicationProperty){
          this.application[applicationProperty as applicationProperties] = formValues[formProperty as applicationProperties];
        }
      }
    }
    this.application.user = 'api/users/' + localStorage.getItem('id')

    this.applicationService.createApplication(this.application)
      .subscribe(el=>{console.log(el)})
  }
}
