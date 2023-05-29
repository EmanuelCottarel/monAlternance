import {
  Component, EventEmitter,
  Input, Output,
} from '@angular/core';
import {ApplicationService} from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {NotificationService} from "../_Services/notification.service";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent {

  constructor(
    private applicationService: ApplicationService,
    private dashboardComponent:DashboardComponent,
    private notificationService: NotificationService
  ) {}

  deleteApplication(app:Application){
    this.applicationService.deleteApplication(app)
      .subscribe(el => {
        this.dashboardComponent.getApplications();
        this.showToasterSuccess();
      });
  }

  @Output() updateApplicationEvent = new EventEmitter();
  updateApplication(app: Application){
    this.updateApplicationEvent.emit(app);
  }

  showToasterSuccess() {
    this.notificationService.showSuccess('La candidature a été supprimé','');
  }

  @Input() applications!: Application[]

}
