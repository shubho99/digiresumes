import {Component, Input} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resume-name-component',
  template: `
    <div fxLayoutAlign="center center" style=" min-height: 100%;
      min-width: 100%;" class="alternate">
      <form (submit)="this.resumeForm.valid && submit()">
        <div *ngIf="!completed" style="    height: 37vh;
    width: 49vh;" fxLayout="column" fxLayoutGap="10px">
          <mat-card fxLayoutGap="20px">
            <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="start center">
              <h1>Name your Resume</h1>
              <span fxFlex="1 1 auto"></span>
            </div>
            <mat-form-field style="width: 100%; margin-top: 11%">
              <input matInput placeholder="Resume Name">
              <mat-hint>It can't be seen by others</mat-hint>
            </mat-form-field>
            <button fxFlexAlign="center" type="submit" mat-raised-button
                    color="accent" matStepperNext>
              NEXT
            </button>
          </mat-card>
        </div>
        <div style="margin-top: -6%;" *ngIf="completed" fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="start center" fxLayoutGap="20px">
          <img style="width: 8%;" src="../../assets/images/complete.png"/>
          <p fxLayout="column">You have Already completed this step</p>
          <button class="space" type="submit" mat-raised-button color="accent" matStepperNext>
            NEXT
          </button>
        </div>
      </form>
    </div>
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
  nameControl = new FormControl('', [Validators.required]);
  @Input() completed = false;

  constructor() {
    document.body.style.fontFamily = 'Yatra One, cursive';
    this.resumeForm = new FormGroup({
      name: this.nameControl
    });
  }

  submit() {
  }
}
