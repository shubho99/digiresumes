import {Component, Input} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-resume-name-component',
  template: `
    <div fxLayoutAlign="center center" style=" min-height: 100%;
      min-width: 100%;" class="alternate">
      <form [formGroup]="this.resumeForm" (submit)="this.resumeForm.valid && submit()">
        <div *ngIf="!completed" style="    height: 37vh;
    width: 49vh;" fxLayout="column" fxLayoutGap="10px">
          <mat-card fxLayoutGap="20px">
            <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="start center">
              <h1>Name your Resume</h1>
              <span fxFlex="1 1 auto"></span>
            </div>
            <mat-form-field style="width: 100%; margin-top: 11%">
              <input formControlName="name" matInput placeholder="Resume Name">
              <mat-hint>It can't be seen by others</mat-hint>
            </mat-form-field>
            <button fxFlexAlign="center" type="submit" mat-raised-button
                    color="accent" matStepperNext>
              NEXT
            </button>
          </mat-card>
        </div>
        <div style="margin-top: -6%;" *ngIf="completed" fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="start center"
             fxLayoutGap="20px">
          <img style="width: 8%;" src="../../assets/images/complete.png"/>
          <p fxLayout="column">You have Already completed this step</p>
          <button class="space" type="button" mat-raised-button color="accent" matStepperNext>
            NEXT
          </button>
        </div>
      </form>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    .space {
      margin-left: 16%;
      margin-top: 2%;
    }

    mat-card {
      width: 100%;
      height: 76%;
    }

    input {
      color: #7de261;
    }

    button {
      margin-top: 12%;
      margin-left: 79%
    }
  `],
})
export class ResumeNameComponent {
  @Input() resume: Resume;
  resumeForm: FormGroup;
  @Input() completed = false;
  loading = false;

  constructor(private resumeRepo: ResumeRepoService, private alert: AlertService) {
    this.resumeForm = new FormGroup({
      'name': new FormControl(null, [Validators.required])
    });
  }

  submit() {
    this.loading = true;
    this.resumeRepo.addResume(this.resumeForm.value).subscribe((res) => {
      this.completed = true;
      this.loading = false;
      this.alert.success('Resume name added Successfully');
    });
  }
}
