import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';
import {EmploymentHistory} from '../../../core/models/employment-history';
import {EmploymentHistoryFormComponent} from '../../dialogues/resume-form/employment-history-form.component';

@Component({
  selector: 'app-employment-history',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-employment-history-form-card *ngFor="let employmentHistory of employmentHistories" [resumeId]="resumeId"
                                        [employmentHistory]="employmentHistory"></app-employment-history-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Employment History</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
      text-transform: uppercase;
    }
  `]
})
export class EmploymentHistoryComponent {
  @Input() employmentHistories: EmploymentHistory[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(EmploymentHistoryFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
