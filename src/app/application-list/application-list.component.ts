import {Component, EventEmitter, OnInit, Output,} from '@angular/core';
import {ApplicationService} from '../_Services/application.service';
import {Application} from "../_Interfaces/application";
import {faEnvelope, faEye, faGripVertical, faLink, faPencil, faPhone, faTrash} from "@fortawesome/free-solid-svg-icons";
import {DataFilters} from "../_Interfaces/dataFilters";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {ShowApplicationDialogueComponent} from "../show-application-dialogue/show-application-dialogue.component";
import {InteractionService} from "../_Services/interaction.service";
import {InteractionHistory} from "../_Interfaces/interaction-history";


@Component({
             selector: 'app-application-list',
             templateUrl: './application-list.component.html',


           })
export class ApplicationListComponent implements OnInit {

  applications!: Application[];
  interactionHistory?: InteractionHistory[];

  @Output() updateApplicationEvent = new EventEmitter();

  constructor(
    private applicationService: ApplicationService,
    public dialog: MatDialog,
    private interactionService: InteractionService
  ) {
  }

  protected readonly faPencil = faPencil;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLink = faLink;
  protected readonly faTrash = faTrash;
  protected readonly faPhone = faPhone;
  protected readonly faGrip = faGripVertical;
  protected readonly faEye = faEye;

  ngOnInit() {
    this.getApplications()
  }

  public getApplications(filters?: DataFilters) {
    this.applicationService.getApplicationsByUser(filters)
        .subscribe(applications => {
          this.applications = applications;
        })
  }

  deleteApplication(app: Application) {
    this.applicationService.deleteApplication(app)
        .subscribe(el => {
          this.getApplications();
        });
  }

  updateApplication(app: Application) {
    this.updateApplicationEvent.emit(app);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.applications, event.previousIndex, event.currentIndex);
    let listIndexes = {
      "lastIndex": event.previousIndex,
      "newIndex": event.currentIndex
    }
    this.applicationService.saveIndex(listIndexes).subscribe()
  }


  openDialog(application: Application) {

    this.interactionService.getInteractionHistory(application).subscribe((interactionHistory) => {

      const dialogRef = this.dialog.open(ShowApplicationDialogueComponent, {
        data:
          {
            app: application,
            history: interactionHistory
          },
        width: '800px'

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    })
  }

}
