import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {ApplicationService} from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {faEllipsis, faEnvelope, faLink, faPencil, faPhone, faTrash} from "@fortawesome/free-solid-svg-icons";
import {DataFilters} from "../_Interfaces/dataFilters";


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
})
export class ApplicationListComponent implements OnInit{

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


  getApplications(filters?:DataFilters) {
    this.applicationService.getApplicationsByUser(filters)
        .subscribe(applications => {
          this.applications = applications;
        })
  }

  ngOnInit() {
    this.getApplications()
  }

  deleteApplication(app:Application){
    this.applicationService.deleteApplication(app)
      .subscribe(el => {
        this.getApplications();
      });
  }
  updateApplication(app: Application){
    this.updateApplicationEvent.emit(app);
  }






}
