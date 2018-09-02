import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';
import {ProjectDetail} from '../../../core/models/project-detail';
import {ProjectDetailFormComponent} from '../../dialogues/resume-form/project-detail-form.component';

@Component({
  selector: 'app-project-detail',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-project-detail-form-card *ngFor="let projectDetail of projectDetails" [resumeId]="resumeId"
                               [projectDetail]="projectDetail"></app-project-detail-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Project Detail</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class ProjectDetailsComponent {
  @Input() projectDetails: ProjectDetail[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ProjectDetailFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
