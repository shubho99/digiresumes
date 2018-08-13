import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {MatDialog} from '@angular/material';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-skill-card',
  template: `
    <div fxLayoutAlign="center center" fxLayout="column" on-mouseenter="hover=true" on-mouseleave="hover=false">
      <ng-container>
        <div class="outer-div" fxLayoutAlign="center center" fxLayout="column">
          <ng-container *ngIf="skill">
            <h3>{{skill.skill}}</h3>
            <h3>{{skill.level}}</h3>
            <p>{{skill.represent}}</p>
          </ng-container>
        </div>
        <div class="hover">
          <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutGap="30px">
            <button (click)="edit()" mat-icon-button>
              <mat-icon>create</mat-icon>
            </button>
            <button (click)="delete()" mat-icon-button>
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    mat-icon {
      font-size: 43px;
      position: relative;
      left: 44%;
      color: white;
      top: 35px;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 18%;
      bottom: 0;
      right: 0;
      left: 32%;
      height: 15%;
      width: 40%;
      z-index: 100;
    }

    .outer-div {
      background: lightgrey;
      border: 1px dashed #d8d8d8;
      width: 50%;
    }
  `]
})
export class SkillsCardComponent {
  @Input() skill: Skill;
  @Input() resumeId: string;
  hover = false;
  loading = false;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepoService,private alert:AlertService) {

  }

  edit() {
    const dialogRef = this.dialog.open(SkillFormComponent, {
      disableClose: true,
      data: {skill: this.skill, resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.loading = true;
    this.resumeRepo.deleteSkill(this.resumeId, this.skill._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Skill deleted Successfully');
    });
  }
}
