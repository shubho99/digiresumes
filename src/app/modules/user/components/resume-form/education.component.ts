import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';

@Component({
  selector: 'app-education',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-education-form-card *ngFor="let education of educations" [resumeId]="resumeId" 
                               [education]="education" ></app-education-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Education</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class EducationComponent {
  @Input() educations: Education[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(EducationFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
