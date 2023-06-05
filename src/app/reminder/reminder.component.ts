import {Component, OnInit} from '@angular/core';
import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
})
export class ReminderComponent implements OnInit{

  constructor(private applicationService: ApplicationService) {
  }

  applicationList?: any;
  sendRemindersAfterDays: Number = 7;

  getRemindersList(){
    this.applicationService.getApplicationsReminders()
      .subscribe(appList => {
        this.applicationList = Object.entries(appList);
      })
  }
  test(){
    console.log(this.applicationList);
  }
  ngOnInit() {
    this.getRemindersList();
  }

}
