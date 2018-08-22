import {Component, Input} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';
import {MatDialog} from '@angular/material';
import {ResumeEditComponent} from '../../dialogues/resume-edit.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume-card',
  template: `
    <mat-card fxLayout="column" on-mouseenter="hover=true" on-mouseleave="hover=false">
      <img mat-card-image src="../../../../../assets/images/resume.png"/>
      <span>{{resume.name}}</span>
      <div *ngIf="  hover" class="hover" fxLayout="column" fxLayoutGap="60px">
        <div class="icons-div" fxLayout="row" fxLayoutWrap="wrap" fxLayoutGap="50px">
          <button mat-icon-button>
            <mat-icon matTooltip="share">share</mat-icon>
          </button>
          <button (click)="preview()" mat-icon-button>
            <mat-icon matTooltip="preview">visibility</mat-icon>
          </button>
          <button (click)="delete()" mat-icon-button>
            <mat-icon matTooltip="delete">delete</mat-icon>
          </button>
        </div>
        <div class="icons-div" fxLayout="row" fxLayoutWrap="wrap" fxLayoutGap="50px">
          <button (click)="edit()" matTooltip="edit Name" mat-icon-button>
            <mat-icon>create</mat-icon>
          </button>
        </div>
      </div>
    </mat-card>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-card {
      width: 250px;
      margin: 15px 10px;
      background: linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%);
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      height: 271px;
      transition: all 0.5s;
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 14px;
      text-align: center;
    }

    .icons-div {
      position: absolute;
      bottom: 25%;
      left: 6%;
    }

    mat-icon {
      color: white;
      font-size: 50px;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      height: calc(100% - 65px);
      width: 100%;
      opacity: 0.8;
    }
  `]
})
export class ResumeCardComponent {
  @Input() resume: Resume;
  hover = false;
  loading = false;

  constructor(private resumeRepo: ResumeRepoService, private alertService: AlertService,
              private dialog: MatDialog, private router: Router) {
  }

  delete() {
    this.loading = true;
    this.resumeRepo.deleteResume(this.resume._id).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Resume deleted Successfully');
    }, (error) => {
      this.loading = false;
    });
  }

  edit() {
    const dialogRef = this.dialog.open(ResumeEditComponent, {data: {resume: this.resume}});
    dialogRef.updateSize('50%', '20%');
  }

  preview() {
    this.router.navigateByUrl('/user/preview/resume/' + this.resume._id);
  }
}
