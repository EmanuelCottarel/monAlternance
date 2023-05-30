import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";
import {NotificationService} from "../_Services/notification.service";
import {applicationForm} from "../_Forms/formApplication";

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',


})
export class ApplicationFormComponent implements OnInit{

  constructor(
    private applicationService: ApplicationService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    if (this.createApp){
      this.applicationForm.reset();
    }
  }

  title: string = 'Créer une candidature';

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

  @Input() appToUpdate: Application | undefined;
  @Input() createApp?: boolean;
  @Output() newApplicationEvent = new EventEmitter();
  @Output() closeFormEvent = new EventEmitter();

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

  ngOnChanges() {
   if(!this.createApp && this.appToUpdate) {
      this.applicationForm.patchValue(this.appToUpdate);
      this.applicationForm.controls['submitedAt'].setValue(this.appToUpdate.submitedAt?.toString().split('T')[0]);
      this.applicationForm.addControl('id', new FormControl(this.appToUpdate.id))
      this.title = 'Modifier la candidature';
    }
  }

  closeForm() {
    this.closeFormEvent.emit();
    this.applicationForm.reset();
  }

}
