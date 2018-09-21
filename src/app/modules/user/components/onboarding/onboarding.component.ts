
import {filter, takeWhile} from 'rxjs/operators';
import {Component, OnDestroy} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AuthRepoService} from '../../../core/repositry/authRepo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-onboarding',
  template: `
    <div *ngIf="!loading" class="alternate">
      <mat-horizontal-stepper [linear]="true">
        <mat-step [optional]="false">
          <ng-template matStepLabel>NAME YOUR RESUME</ng-template>
          <app-resume-name-component [completed]="completed"></app-resume-name-component>
        </mat-step>
        <mat-step *ngIf="resume.length > 0" [optional]="true">
          <ng-template matStepLabel>UPLOAD IMAGE AND VIDEO</ng-template>
          <app-upload-component></app-upload-component>
        </mat-step>
        <mat-step *ngIf="resume.length > 0" [optional]="false">
          <ng-template matStepLabel>RESUME DETAILS</ng-template>
          <app-resume-form></app-resume-form>
          <div style="    margin-left: 82%;
    margin-top: 4%;
    margin-bottom: 3%;" fxLayoutGap="10px">
            <button mat-raised-button matStepperPrevious color="primary">PREV</button>
            <button (click)="finish()" mat-raised-button color="accent">FINISH</button>
          </div>
        </mat-step>
      </mat-horizontal-stepper>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Yatra+One');

    mat-horizontal-stepper {
      background: #fafafa !important;
      font-family: Yatra One, cursive !important;
    }
  `],
})
export class OnboardingComponent implements OnDestroy {
  resume: Resume[] = [];
  isAlive = true;
  completed;
  loading;

  constructor(private resumeRepo: ResumeRepoService, private authService: AuthRepoService, private router: Router) {
    this.fetchResume();
  }

  fetchResume() {
    this.loading = true;
    const resume$ = this.resumeRepo.getAllResumes();
    resume$[0].pipe(takeWhile(() => this.isAlive),filter((res) => !!res),).subscribe((res) => {
      if (res.length > 0) {
        this.resume = res;
        this.resumeRepo.addCurrentResumeId(res[0]._id);
        this.completed = true;
        this.loading = false;
      } else {
        this.loading = false;
        this.completed = false;
        this.resume = [];
      }
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  finish() {
    this.loading = true;
    this.authService.updateOnboarding({onboarding: 200}).subscribe((res) => {
      this.loading = false;
      this.resumeRepo.deleteCurrentResumeId();
      this.router.navigate(['user', 'resumes']);
    }, (error) => {
      this.loading = false;
    });
  }
}
