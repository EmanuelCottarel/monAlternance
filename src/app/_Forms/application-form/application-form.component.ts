import {Component, Injectable, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Application} from "../../_Interfaces/application";
import {ApplicationService} from "../../_Services/application.service";
import {ApplicationListComponent} from '../../application-list/application-list.component'
import {NotificationService} from "../../_Services/notification.service";


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

  showToasterSuccess() {
    this.notificationService.showSuccess('La candidature a bien été crée', 'Candidature crée!');
  }

  onSubmit() {

    if (this.applicationForm.valid) {
      this.newApplicationEvent.emit(this.applicationForm.value);
      this.applicationForm.reset();
    }
  }
}
