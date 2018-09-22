import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Interest} from '../../../core/models/interest';
import {InterestFormComponent} from '../../dialogues/resume-form/interest-form.component';

@Component({
  selector: 'app-interest',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-interest-form-card *ngFor="let interest of interests" [resumeId]="resumeId"
                                   [interest]="interest"></app-interest-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Interest</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
      text-transform: uppercase;
    }
  `]
})
export class InterestComponent {
  @Input() interests: Interest[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(InterestFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
