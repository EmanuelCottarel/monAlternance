import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../_Services/application.service';
import {Application} from "../_Interfaces/application";

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

  applications: Application[] = [];

  ngOnInit(): void
  {
    this.getApplications();
  }
  getApplications(){
    this.applicationService.getApplications()
      .subscribe(applications => console.log(applications))
  }

}
