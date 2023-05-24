import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {faPhone, faEnvelope, faLink, faHouse} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent {

  constructor(
    private applicationService: ApplicationService
  ) {
  }

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLink = faLink;

  applications: Application[] = [];

  ngOnInit(): void
  {
   this.getApplications();

  }

  private userId : string | null = localStorage.getItem('id');
  getApplications(){
    this.applicationService.getApplicationsByUser(this.userId)
      .subscribe(applications => {
        this.applications = applications;
        console.log(this.applications)
      })
  }

  protected readonly faHouse = faHouse;
}
