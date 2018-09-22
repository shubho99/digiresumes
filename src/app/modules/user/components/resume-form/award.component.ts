import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';
import {AwardsAchivement} from '../../../core/models/awards-achivement';
import {AwardsFormComponent} from '../../dialogues/resume-form/awards-form.component';

@Component({
  selector: 'app-award',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-award-form-card *ngFor="let award of awards" [resumeId]="resumeId" [award]="award"></app-award-form-card>
      <button (click)="add()" mat-raised-button color="primary">Add Award And Achievement</button>
    </div>
  `,
  styles: [`
    button {
      width: 100%;
      text-transform: uppercase;
    }
  `]
})
export class AwardComponent {
  @Input() awards: AwardsAchivement[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(AwardsFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
