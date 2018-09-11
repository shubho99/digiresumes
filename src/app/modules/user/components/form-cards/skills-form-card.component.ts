import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {MatDialog} from '@angular/material';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-skill-form-card',
  template: `
    <div fxLayoutAlign="center center" fxLayout="column">
      <ng-container>
        <div class="outer-div" style="height:  66px;" fxLayoutAlign="center center" fxLayout="column">
          <ng-container *ngIf="skill">
            <h3>{{skill.skill}}</h3>
            <h3>{{skill.level}}</h3>
            <p>{{skill.represent}}</p>
          </ng-container>
          <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center center">
            <div class="overlay">
              <div class="hover">
                <button style="margin-top: 1%" (click)="edit()" mat-icon-button>
                  <mat-icon *ngIf="skill">create</mat-icon>
                </button>
                <button *ngIf="skill" style="margin-top: 1%" (click)="delete()" mat-icon-button>
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-icon {
      font-size: 35px;
      text-align: center;
      color: white;
    }
  `]
})
export class SkillsFormCardComponent {
  @Input() skill: Skill;
  @Input() resumeId: string;
  loading = false;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepoService, private alert: AlertService) {
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
