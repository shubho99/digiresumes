import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProjectDetailFormComponent} from '../../dialogues/resume-form/project-detail-form.component';
import {Strength} from '../../../core/models/strength';
import {StrengthFormComponent} from '../../dialogues/resume-form/strength-form.component';

@Component({
  selector: 'app-strength',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-strength-form-card *ngFor="let strength of strengths" [resumeId]="resumeId"
                         [strength]="strength"></app-strength-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Strength</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class StrengthComponent {
  @Input() strengths: Strength[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(StrengthFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
