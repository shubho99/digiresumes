import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthRepoService} from '../../core/repositry/authRepo.service';
import {AlertService} from '../../core/services/alert.service';

@Component({
  selector: 'app-password-setting',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && updatePassword()">
      <div fxLayout="column" fxLayoutAlign="start stretch">
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>Old Password:</label>
          <mat-form-field>
            <input formControlName="old_password" type="password" placeholder="Old Password" matInput/>
            <mat-error>Old Password is Required</mat-error>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>New Password:</label>
          <mat-form-field>
            <input formControlName="new_password" type="password" placeholder="New Password" matInput/>
            <mat-error>New Password is Required</mat-error>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>Confirm Password:</label>
          <mat-form-field>
            <input formControlName="confirm_password" type="password" placeholder="Confirm Password" matInput/>
            <mat-error>Confirm Password is Required</mat-error>
          </mat-form-field>
        </div>
      </div>
      <button mat-raised-button color="accent">Update Password</button>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-form-field {
      width: 70%;
    }
  `]
})
export class PasswordSettingComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private authRepo: AuthRepoService, private alert: AlertService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'old_password': new FormControl(null, [Validators.required]),
      'new_password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirm_password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  updatePassword() {
    this.loading = true;
    this.authRepo.updatePassword(this.form.value).subscribe((res) => {
      this.loading = false;
      this.alert.success('Password Updated Successfully');
    }, (err) => {
      this.loading = false;
    });
  }
}
