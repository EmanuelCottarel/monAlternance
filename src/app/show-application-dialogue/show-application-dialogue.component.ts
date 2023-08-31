import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {faCross, faPencil, faXmark, faEnvelope, faPhone, faLink  } from "@fortawesome/free-solid-svg-icons";
import {InteractionHistory} from "../_Interfaces/interaction-history";

@Component({
             selector: 'app-show-application-dialogue',
             templateUrl: './show-application-dialogue.component.html',
           })
export class ShowApplicationDialogueComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<ShowApplicationDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  protected readonly faXmark = faXmark;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faPhone = faPhone;
  protected readonly faLink = faLink;


  interactionHistory!: InteractionHistory[]

  ngOnInit() {
    this.interactionHistory = this.data.history
    console.log(this.data.app.email)
    console.log(this.data.history)
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
