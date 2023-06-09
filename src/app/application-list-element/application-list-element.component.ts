import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faEnvelope, faLink, faPencil, faPhone, faTrash, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {ApplicationListComponent} from "../application-list/application-list.component";
import {Application} from "../_Interfaces/application";
import {ApplicationService} from "../_Services/application.service";

@Component({
  selector: 'app-application-list-element',
  templateUrl: './application-list-element.component.html',
})
export class ApplicationListElementComponent {

  constructor(
  ) {
  }

  @Input() application!: Application

  @Output() deleteApplicationEvent = new EventEmitter();
  @Output() updateApplicationEvent = new EventEmitter();

  deleteApplication(application: Application) {
    this.deleteApplicationEvent.emit(this.application);
  }

  editApplication(application: Application){
    this.updateApplicationEvent.emit(this.application);
  }

  protected readonly faPencil = faPencil;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLink = faLink;
  protected readonly faTrash = faTrash;
  protected readonly faPhone = faPhone;
  protected readonly faEllipsis = faEllipsis


}
