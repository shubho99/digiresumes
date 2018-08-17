import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';
import {EmploymentHistory} from '../../../core/models/employment-history';
import {EmploymentHistoryFormComponent} from '../../dialogues/resume-form/employment-history-form.component';
import {IndustrialExposure} from '../../../core/models/industrial-exposure';
import {IndustrialExposureFormComponent} from '../../dialogues/resume-form/industrial-exposure-form.component';

@Component({
  selector: 'app-industrial-exposure',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-industrial-exposure-card *ngFor="let industrialExposure of industrialExposures" [resumeId]="resumeId"
                                   [industrial_exposure]="industrialExposure"></app-industrial-exposure-card>
      <button (click)="add()" mat-raised-button color="primary">Add IndustrialExposure</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class IndustrialExposureComponent {
  @Input() industrialExposures: IndustrialExposure[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(IndustrialExposureFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
