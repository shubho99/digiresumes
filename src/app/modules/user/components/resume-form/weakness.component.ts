import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Weakness} from '../../../core/models/weakness';
import {WeaknessFormComponent} from '../../dialogues/resume-form/weakness-form.component';

@Component({
  selector: 'app-weakness',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-weakness-form-card *ngFor="let weakness of weaknesses" [resumeId]="resumeId"
                         [weakness]="weakness"></app-weakness-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Weakness</button>
    </div>

  `,
  styles: [`
  `]
})
export class WeaknessComponent {
  @Input() weaknesses: Weakness[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(WeaknessFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
