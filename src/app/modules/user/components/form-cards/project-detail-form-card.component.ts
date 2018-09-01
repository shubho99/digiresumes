import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';
import {ProjectDetail} from '../../../core/models/project-detail';
import {AwardsFormComponent} from '../../dialogues/resume-form/awards-form.component';
import {ProjectDetailFormComponent} from '../../dialogues/resume-form/project-detail-form.component';

@Component({
  selector: 'app-project-detail-form-card',
  template: `
    <div style="height: 60px" fxLayoutAlign="center center" fxLayout="column">
      <ng-container>
        <div class="outer-div" fxLayoutAlign="center center" fxLayout="column">
          <ng-container>
            <h3>{{projectDetail.title}}</h3>
            <p style="word-break: break-word">{{projectDetail.description}}</p>
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
export class ProjectDetailFormCardComponent {
  @Input() projectDetail: ProjectDetail;
  @Input() resumeId: string;
  loading = false;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepoService, private alert: AlertService) {
  }

  edit() {
    const dialogRef = this.dialog.open(ProjectDetailFormComponent, {
      disableClose: true,
      data: {project_detail: this.projectDetail, resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.loading = true;
    this.resumeRepo.deleteProjectDetail(this.resumeId, this.projectDetail._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Project Details deleted Successfully');
    });
  }
}
