import {Component} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../modules/core/services/alert.service';

@Component({
  selector: 'app-password-reset',
  template: `
    <div  fxLayoutAlign="center center" class="overlay">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-card fxFlex="100%" style="background-color: #000000">
          <form [formGroup]="passwordResetForm" (submit)="passwordResetForm.valid && resetPassword()">
            <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="start center">
              <h1>Reset Password</h1>
              <span fxFlex="1 1 auto"></span>
            </div>
            <mat-form-field style="width: 100%;margin-top: 2%">
              <input matInput placeholder="New Password" [formControlName]="'new_password'" type="password">
              <mat-hint>Password must be of atleast 8 digits</mat-hint>
              <mat-error>New Password is required</mat-error>
            </mat-form-field>
            <mat-form-field style="width: 100%">
              <input matInput type="password" [formControlName]="'confirm_password'" placeholder="Confirm Password">
              <mat-hint>Password and confirm password should match</mat-hint>
              <mat-error> Confirm Password is required</mat-error>
            </mat-form-field>
            <div fxLayout="row" fxLayoutAlign="end center">
              <button type="submit" style="margin-top: 7%" mat-raised-button fxFlexAlign="end" color="primary"
                      color="accent">
                Submit
              </button>
            </div>
          </form>
        </mat-card>
      </div>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    .overlay {
      background: #ffdab4;
      background-image: -webkit-radial-gradient(top, circle cover, #ffbea6, #ff7d04 80%);
      background-image: -moz-radial-gradient(top, circle cover, #ffbea6, #ff7d04 80%);
      background-image: -o-radial-gradient(top, circle cover, #ffbea6, #ff7d04 80%);
      background-image: radial-gradient(top, circle cover, #ffbea6, #ff7d04 80%);
      min-height: 100%;
      min-width: 100%;
    }
  `]
})
export class PasswordResetComponent {
  code = '';
  passwordResetForm: FormGroup;
  loading = false;

  constructor(private authRepo: AuthRepoService, private router: Router, private route: ActivatedRoute,
              private alertService: AlertService) {
    this.passwordResetForm = new FormGroup({
      new_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
    this.route.paramMap.subscribe(params => {
        this.code = params.get('code');
      }
    );
  }

  resetPassword() {
    this.loading = true;
    const data = {
      code: this.code,
      new_password: this.passwordResetForm.get('new_password').value,
      confirm_password: this.passwordResetForm.get('confirm_password').value,
    };
    this.authRepo.resetPassword(data).subscribe((res) => {
      if (!res) {
        this.loading = false;
        return this.alertService.error('Password Reset Link is Invalid');
      }
      this.loading = false;
      this.alertService.success('Password Reset Successfully');
      this.router.navigate(['/']);
    }, error => {
      this.loading = false;
      this.alertService.error(error.error.message);
    });
  }
}
