import {Component, OnDestroy} from '@angular/core';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {MatDialog} from '@angular/material';
import {ResumeEditComponent} from '../dialogues/resume-edit.component';

@Component({
  selector: 'app-resumes',
  template: `
    <div *ngIf="this.resumes" fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center" fxLayoutGap="20px">
      <mat-card *ngIf="!this.loading" matRipple (click)="addResume()" class=addcard>
        <mat-icon>add_box</mat-icon>
        <mat-card-title>Add Resume</mat-card-title>
      </mat-card>
      <app-resume-card *ngFor="let resume of resumes" [resume]="resume"></app-resume-card>
      <span *appFlexAlignmentHack></span>
    </div>
    <p style="margin-top: 7%; text-align: center" *ngIf="!this.resumes">No resume added yet.</p>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    span {
      height: 255px;
      width: 250px;
      margin: 20px 20px;
    }

    .addcard {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 1000px;
      place-content: center;
      align-items: center;
    }

    mat-icon {
      font-size: 80px;
      width: 80px;
      height: 104px;
      color: #538ec3;
    }

    mat-card {
      width: 80%;
      margin: 20px 20px;
      /*background: linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%);*/
      background: #eaf1f8;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      height: 270px;
      text-transform: uppercase;
      color: #538ec3;
    }

  `]
})
export class ResumesComponent implements OnDestroy {
  resumes: Resume[] = [];
  loading = false;
  isAlive = true;

  constructor(private resumeRepo: ResumeRepoService, private dialog: MatDialog) {
    this.fetchResumes();
  }

  fetchResumes() {
    const resume$ = this.resumeRepo.getAllResumes();
    resume$[0].takeWhile(() => this.isAlive).filter(res => !!res).subscribe((res) => {
      this.resumes = res;
    });
    resume$[1].takeWhile(() => this.isAlive).subscribe((res) => {
      this.loading = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  addResume() {
    const dialogRef = this.dialog.open(ResumeEditComponent);
    dialogRef.updateSize('50%', '20%');
  }
}
