import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {MatDialog} from '@angular/material';
import {SkillFormComponent} from '../../dialogues/resume-form/skill-form.component';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';
import {Education} from '../../../core/models/education';
import {EducationFormComponent} from '../../dialogues/resume-form/education-form.component';
import {Objective} from '../../../core/models/objective';
import {ObjectivesFormComponent} from '../../dialogues/resume-form/objectives-form.component';

@Component({
  selector: 'app-objective-card',
  template: `
    <div fxLayoutAlign="center center" fxLayout="column">
      <ng-container>
        <div class="outer-div" fxLayoutAlign="center center" fxLayout="column">
          <ng-container>
            <h3>{{objective.objective}}</h3>
            <h3>{{objective.declaration}}</h3>
            <p>{{objective.place}}</p>
            <p>{{objective.date}}</p>
          </ng-container>
          <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center center">
            <div class="overlay">
              <div class="hover">
                <button style="margin-top: 1%" (click)="edit()" mat-icon-button>
                  <mat-icon >create</mat-icon>
                </button>
                <button  style="margin-top: 1%" (click)="delete()" mat-icon-button>
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
export class ObjectiveCardComponent {
  @Input() objective: Objective;
  @Input() resumeId: string;
  loading = false;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepoService, private alert: AlertService) {
  }

  edit() {
    const dialogRef = this.dialog.open(ObjectivesFormComponent, {
      disableClose: true,
      data: {objective: this.objective, resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.loading = true;
    this.resumeRepo.deleteObjective(this.resumeId, this.objective._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Objective deleted Successfully');
    });
  }
}