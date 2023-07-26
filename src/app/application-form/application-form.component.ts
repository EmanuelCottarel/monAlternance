import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";
import {NotificationService} from "../_Services/notification.service";
import {applicationForm} from "../_Forms/formApplication";

@Component({
             selector: 'app-application-form',
             templateUrl: './application-form.component.html',
           })
export class ApplicationFormComponent implements OnInit {

  constructor(
    private applicationService: ApplicationService,
  ) {
  }


  title: string = 'Créer une candidature';
  applicationForm = applicationForm;


  @Input() appToUpdate: Application | undefined;
  @Input() createApp?: boolean;
  @Output() newApplicationEvent = new EventEmitter();
  @Output() closeFormEvent = new EventEmitter();

  ngOnInit() {
    if (this.createApp) {
      this.applicationForm.reset();
    }
  }

  onSubmit() {

    if (this.appToUpdate) {
      this.applicationService.updateApplication(applicationForm.getRawValue(), this.appToUpdate.id).subscribe()
    } else {
      this.applicationService.createApplication(applicationForm.getRawValue()).subscribe()
    }
    if (this.applicationForm.valid) {
      this.applicationForm.reset();
    }
  }

  ngOnChanges() {
    if (!this.createApp && this.appToUpdate) {
      this.applicationForm.patchValue(this.appToUpdate);
      this.applicationForm.controls['submitedAt'].setValue(this.appToUpdate.submitedAt?.toString().split('T')[0]);
      this.title = 'Modifier la candidature';
    }
  }

  closeForm() {
    this.closeFormEvent.emit();
    this.applicationForm.reset();
  }

}
