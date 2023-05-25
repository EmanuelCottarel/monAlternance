import {
  Component,
  createComponent,
  ElementRef,
  Injectable,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ApplicationService} from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {faPhone, faEnvelope, faLink, faHouse, faPencil, faTrash} from '@fortawesome/free-solid-svg-icons';
import {ViewContainerRef} from '@angular/core';
import {ApplicationListElementComponent} from "../application-list-element/application-list-element.component";
import {bootstrapApplication} from "@angular/platform-browser";


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent {

  constructor(
    private applicationService: ApplicationService,

  ) {
  }

  @Input() applications!: Application[]



  // ngOnChanges(changes: SimpleChanges) {
  //   // this.applications.push(this.application)
  //   console.log('changes', changes)
  //   if (changes['application'].currentValue !== changes['application'].previousValue) {
  //     this.getApplications();
  //
  //   }
  // }

  // ngOnInit(): void {
  //   this.getApplications();
  // }


  // private userId: string | null = localStorage.getItem('id');

  // getApplications() {
  //   this.applicationService.getApplicationsByUser(this.userId)
  //     .subscribe(applications => {
  //       this.applications = applications;
  //       console.log(this.applications)
  //     })
  // }
}
