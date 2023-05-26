import {Component} from '@angular/core';
import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";

type applicationProperties = keyof Application;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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

  public getApplications() {
    this.applicationService.getApplicationsByUser(this.userId)
      .subscribe(applications => {
        this.applications = applications;
      })
  }

  addApplicationListener(app: Application) {
    app.user= `/api/users/${this.userId}`
    this.applicationService.createApplication(app)
      .subscribe(el => {
        this.getApplications()
      })

  }

}
