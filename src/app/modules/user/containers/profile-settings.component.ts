import {Component, Input, OnInit} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';
import {User} from '../../core/models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../core/services/alert.service';
import {ExperienceLevel, JobCategories} from '../../core/utils/utils';

@Component({
  selector: 'app-profile-settings',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && update() ">
      <div fxLayout="column" fxLayoutAlign="start stretch">
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>Name:</label>
          <mat-form-field>
            <input formControlName="name" placeholder="Name" matInput/>
            <mat-error>Please Provide a name to update</mat-error>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>Email:</label>
          <mat-form-field>
            <input [value]="this.user.email" disabled placeholder="Email" matInput/>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-evenly center">
          <label>Job<br>Experience:</label>
          <select class="res-select-settings" style="margin-left: 19%" [formControlName]="'job_category'">
            <option *ngFor="let option of jobCategories" [value]="option">{{option}}</option>
          </select>
        </div>
        <div style="margin-top: 4%;" fxLayout="row" fxLayoutAlign="space-evenly center">
          <label>Experience<br>Level:</label>
          <select [ngStyle.xs]="{'margin-left.%': 28, 'padding.px': 8}" style="margin-left: 48%" [formControlName]="'experience_level'">
            <option *ngFor="let option of this.experienceLevel" [value]="option">{{option}}</option>
          </select>
        </div>
      </div>
      <div fxLayout="row" fxLayoutAlign="end center">
        <button style="text-transform: uppercase; margin-top: 15px;" mat-raised-button color="primary">Update profile</button>
      </div>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-form-field {
      width: 70%;
    }
    select {
      padding: 10px;
      border-radius: 8px;
    }
  `]
})
export class ProfileSettingsComponent implements OnInit {
  @Input() user: User = null;
  form: FormGroup;
  loading = false;
  jobCategories = JobCategories;
  experienceLevel = ExperienceLevel;

  constructor(private authRepo: AuthRepoService, private alert: AlertService) {
  }

  ngOnInit() {
    const name = this.user ? this.user.name : null;
    const jobCategory = this.user ? this.user.job_category : null;
    const expLevel = this.user ? this.user.experience_level : null;
    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'job_category': new FormControl(jobCategory, [Validators.required]),
      'experience_level': new FormControl(expLevel, [Validators.required]),
    });
  }

  update() {
    this.loading = true;
    this.authRepo.updateUserProfile(this.form.value).subscribe((res) => {
      this.loading = false;
      this.alert.success('Profile updated Successfully');
    }, (err) => {
      this.loading = false;
    });
  }
}
