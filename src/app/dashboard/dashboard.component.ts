import {Component} from '@angular/core';
import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";
import {animate, style, transition, trigger} from "@angular/animations";

type applicationProperties = keyof Application;


@Component({
             selector: 'app-dashboard',
             templateUrl: './dashboard.component.html',
             animations: [
               trigger('showFormApplication', [
                 transition(
                   ':enter',
                   [
                     style({transform: 'translateX(100%)'}),
                     animate('0.3s ease-out',
                             style({transform: 'translateX(0)'}))
                   ]
                 ),
                 transition(
                   ':leave',
                   [
                     animate('0.3s ease-in',
                             style({transform: 'translateX(100%)'}))
                   ]
                 )
               ])
             ]
           })
export class DashboardComponent {

  constructor(

  ) {
  }

  applications: Application[] = [];
  applicationToUpdate?: Application;

  updateApplication(app: Application) {
    this.applicationToUpdate = app;
    if (!this.formState) {
      this.toggleFormState();
    }
  }

  //Animation form

  formState: boolean = false;

  createApp: boolean = false;

  toggleFormState() {
    this.formState = !this.formState
  }


}
