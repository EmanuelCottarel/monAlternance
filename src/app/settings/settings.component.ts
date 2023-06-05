import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent{

  settingForm: FormGroup= new FormGroup({
    timeToReminder: new FormControl
})



}
