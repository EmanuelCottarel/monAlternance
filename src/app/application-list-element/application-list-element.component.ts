import {Component, Input} from '@angular/core';
import {faEnvelope, faLink, faPencil, faPhone, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ApplicationListComponent} from "../application-list/application-list.component";
import {Application} from "../_Interfaces/application";

@Component({
  selector: 'app-application-list-element',
  templateUrl: './application-list-element.component.html',
  styleUrls: ['./application-list-element.component.scss']
})
export class ApplicationListElementComponent {

  constructor(private applicationListComponent: ApplicationListComponent) {
  }

@Input() application!: Application

  protected readonly faPencil = faPencil;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLink = faLink;
  protected readonly faTrash = faTrash;
  protected readonly faPhone = faPhone;
}
