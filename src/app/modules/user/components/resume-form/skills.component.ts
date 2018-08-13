import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-skills',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-skill-card *ngFor="let skill of skills" [resumeId]="resumeId" [skill]="skill"></app-skill-card>
      <button (click)="add()" mat-raised-button color="primary">Add Skill</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class SkillsComponent {
  @Input() skills: Skill[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(SkillFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
