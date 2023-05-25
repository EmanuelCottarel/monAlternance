import {Component, Injectable, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Application} from "../../_Interfaces/application";
import {ApplicationService} from "../../_Services/application.service";
import {ApplicationListComponent} from '../../application-list/application-list.component'
import {NotificationService} from "../../_Services/notification.service";

type applicationProperties = keyof Application;

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {

  constructor(
    private applicationService: ApplicationService,
    private notificationService: NotificationService,
  ) {
  }


  application: Application = {
    companyName: '',
    submitedAt: new Date(),
    email: '',
    phoneNumber: '',
    webSite: '',
    status: '',
    user: '',
  }

  applicationForm: FormGroup = new FormGroup({
    companyName: new FormControl(this.application.companyName, Validators.required),
    submitedAt: new FormControl(this.application.submitedAt),
    email: new FormControl(this.application.email, Validators.email),
    phoneNumber: new FormControl(this.application.phoneNumber, [Validators.maxLength(10), Validators.minLength(10)]),
    webSite: new FormControl(this.application.webSite),
    status: new FormControl(this.application.status)
  })

  //test
  @Output() newApplicationEvent = new EventEmitter();

  addNewApplication(app: Application) {
    this.newApplicationEvent.emit(app);
  }

  //

  showToasterSuccess() {
    this.notificationService.showSuccess('La candidature a bien été crée', 'Candidature crée!');
  }

  onSubmit() {
    const formValues = this.applicationForm.value;

    for (const formProperty in formValues) {
      for (const applicationProperty in this.application) {
        if (formProperty === applicationProperty) {
          this.application[applicationProperty as applicationProperties] = formValues[formProperty as applicationProperties];
        }
      }
    }
    this.application.user = 'api/users/' + localStorage.getItem('id')

    this.applicationService.createApplication(this.application)
      .subscribe(el => {
        // console.log('el:', el)
        if (el) {
          this.addNewApplication(this.application);
          this.showToasterSuccess();

        }
      })


  }
}
