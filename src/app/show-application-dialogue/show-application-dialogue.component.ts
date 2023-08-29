import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {faCross, faPencil, faXmark} from "@fortawesome/free-solid-svg-icons";

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

  ngOnInit() {
    console.log(this.data.app.email)
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
