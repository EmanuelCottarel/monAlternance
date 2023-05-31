import {Component} from '@angular/core';
import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {applicationForm} from "../_Forms/formApplication";
import {DataFilters} from "../_Interfaces/dataFilters";

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
    private applicationService: ApplicationService
  ) {
  }

  applications: Application[] = [];

  private userId: string | null = localStorage.getItem('id');

  ngOnInit() {
    this.getApplications()
  }

  public getApplications(filters?:DataFilters) {
    this.applicationService.getApplicationsByUser(filters)
      .subscribe(applications => {
        this.applications = applications;
      })
  }

  addApplicationListener(app: Application) {
    app.user = `/api/users/${this.userId}`
    if (app.id){
      this.applicationService.updateApplication(app)
        .subscribe(el => {
          this.getApplications();
          this.toggleFormState();
        })
    }else{
      this.applicationService.createApplication(app)
        .subscribe(el => {
          this.getApplications();
          this.toggleFormState();
        })
    }
  }

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
