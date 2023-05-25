import { Component } from '@angular/core';
import {Application} from "../_Interfaces/application";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    // public event: Event
  ) {
  }
  ngOnInit(){
    console.log(history.state)
  }

  application: Application = {
    companyName: "",
    submitedAt: new Date(),
    email: "",
    phoneNumber: "",
    webSite: "",
    user: ""
  }
  addApplication(event: Application){
    this.application = event;
    console.log('event:',this.application)

  // this.event = event;
  }

}
