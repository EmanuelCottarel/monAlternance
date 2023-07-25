import {Component} from '@angular/core';
import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {DataFilters} from "../_Interfaces/dataFilters";
import {CookieService} from "ngx-cookie-service";

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
    private applicationService: ApplicationService,
    private cookieService: CookieService
  ) {
  }

  applications: Application[] = [];
  applicationToUpdate?: Application;
  private userId: string | null = this.cookieService.get('id');

  ngOnInit() {
    this.getApplications()
  }

  public getApplications(filters?:DataFilters) {
    this.applicationService.getApplicationsByUser(filters)
      .subscribe(applications => {
        this.applications = applications;
      })
  }

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
