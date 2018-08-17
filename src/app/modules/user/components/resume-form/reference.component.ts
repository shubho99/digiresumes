import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Refrence} from '../../../core/models/refrence';
import {ReferenceFormComponent} from '../../dialogues/resume-form/reference-form.component';

@Component({
  selector: 'app-reference',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-reference-card *ngFor="let reference of references" [resumeId]="resumeId"
                                 [reference]="reference"  ></app-reference-card>
      <button (click)="add()" mat-raised-button color="primary">Add Reference</button>
    </div>
  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class ReferenceComponent {
  @Input() references: Refrence[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    console.log(this.references);
    const dialogRef = this.dialog.open(ReferenceFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
