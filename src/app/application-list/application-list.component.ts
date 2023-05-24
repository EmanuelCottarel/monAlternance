import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import { ApplicationService } from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {faPhone, faEnvelope, faLink, faHouse, faPencil, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ViewContainerRef } from '@angular/core';
import {ApplicationListElementComponent} from "../application-list-element/application-list-element.component";


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent {

  constructor(
    private applicationService: ApplicationService,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  applications: Application[] = [];

  ngOnInit(): void
  {
   this.getApplications();
  }


  //////TEST composants dynamiques
//   @ViewChild('container', { read: ViewContainerRef }) containerRef: ViewContainerRef;
//   test(){
//     const componentRef = this.viewContainerRef.createComponent(ApplicationListElementComponent);
// }

///
  private userId : string | null = localStorage.getItem('id');
  getApplications(){
    this.applicationService.getApplicationsByUser(this.userId)
      .subscribe(applications => {
        this.applications = applications;
        console.log(this.applications)
      })
  }
}
