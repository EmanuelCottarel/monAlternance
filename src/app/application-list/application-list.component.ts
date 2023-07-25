import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {ApplicationService} from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {faEllipsis, faEnvelope, faLink, faPencil, faPhone, faTrash} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
})
export class ApplicationListComponent {

  constructor(
    private applicationService: ApplicationService,
    private dashboardComponent:DashboardComponent,
  ) {}

  @Input() applications!: Application[];
  @Output() updateApplicationEvent = new EventEmitter();

  protected readonly faPencil = faPencil;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLink = faLink;
  protected readonly faTrash = faTrash;
  protected readonly faPhone = faPhone;
  protected readonly faEllipsis = faEllipsis

  deleteApplication(app:Application){
    this.applicationService.deleteApplication(app)
      .subscribe(el => {
        this.dashboardComponent.getApplications();
      });
  }
  updateApplication(app: Application){
    this.updateApplicationEvent.emit(app);
  }






}
