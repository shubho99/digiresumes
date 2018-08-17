import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';
import {Objective} from '../../../core/models/objective';
import {ObjectivesFormComponent} from '../../dialogues/resume-form/objectives-form.component';

@Component({
  selector: 'app-objective',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-objective-card *ngFor="let objective of objectives" [resumeId]="resumeId"
                          [objective]="objective"></app-objective-card>
      <button (click)="add()" mat-raised-button color="primary">Add Objective</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class ObjectiveComponent {
  @Input() objectives: Objective[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ObjectivesFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
