import {Component, OnDestroy} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';

@Component({
  selector: 'app-user-onboarding',
  template: `
    <div class="alternate">
      <mat-horizontal-stepper *ngIf="!loading" [linear]="true">
        <mat-step [optional]="false">
          <ng-template matStepLabel>Name your Resume</ng-template>
          <app-resume-name-component [completed]="completed"></app-resume-name-component>
        </mat-step>
        <mat-step *ngIf="resume" [optional]="true">
          <ng-template matStepLabel>Upload image and Video</ng-template>
          <app-upload-component></app-upload-component>
          <div style="    margin-left: 68%;
    margin-top: 15%;" fxLayoutGap="10px">
            <button mat-raised-button matStepperPrevious color="primary">Prev</button>
            <button mat-raised-button matStepperNext color="accent">Next</button>
          </div>
        </mat-step>
        <mat-step *ngIf="resume" [optional]="false">
          <ng-template matStepLabel>Resume Details</ng-template>
          <div style=";
    margin-left: 84%;" fxLayoutGap="10px">
            <button mat-raised-button matStepperPrevious color="primary">Prev</button>
            <button mat-raised-button color="accent">Finish</button>
          </div>
          <app-resume-form></app-resume-form>
        </mat-step>
      </mat-horizontal-stepper>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-horizontal-stepper {
      background: #fafafa;
    }
  `],
})
export class OnboardingComponent implements OnDestroy {
  resume: Resume[];
  isAlive = true;
  completed;
  loading = false;

  constructor(private resumeRepo: ResumeRepoService) {
    document.body.style.background = '#fafafa';
    this.fetchResume();
  }

  fetchResume() {
    this.loading = true;
    const resume$ = this.resumeRepo.getAllResumes();
    resume$[0].takeWhile(() => this.isAlive).filter((res) => !!res).subscribe((res) => {
      if (res.length > 0) {
        this.resume = res;
        this.resumeRepo.addCurrentResumeId(res[0]._id);
        this.completed = true;
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
