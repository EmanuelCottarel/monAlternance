import {Component, Injectable, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";
import {ApplicationListComponent} from '../application-list/application-list.component'
import {NotificationService} from "../_Services/notification.service";
import {applicationForm} from "../_Forms/formApplication";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],

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
    id: '',
  }

  applicationForm = applicationForm;


  @Output() newApplicationEvent = new EventEmitter();

  showToasterSuccess() {
    this.notificationService.showSuccess('La candidature a bien été crée', '');
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      this.newApplicationEvent.emit(this.applicationForm.value);
      this.showToasterSuccess();
      this.applicationForm.reset();
    }
  }

  //update
  @Input() appToUpdate: Application | undefined;
}
