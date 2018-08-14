import {Component} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../modules/core/services/alert.service';

@Component({
  selector: 'app-password-reset',
  template: `
    <div fxLayoutAlign="center center" class="overlay">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-card fxFlex="100%" style="background-color: #000000; box-shadow: inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2);">
          <form [formGroup]="passwordResetForm" (submit)="passwordResetForm.valid && resetPassword()">
            <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="start center">
              <h1 class="form-text">Reset Password Form</h1>
              <span fxFlex="1 1 auto"></span>
            </div>
            <mat-form-field class="password-text" style="margin-top: 5%;">
              <input matInput placeholder="New Password" [formControlName]="'new_password'" type="password">
              <mat-hint>Password must be of atleast 8 digits</mat-hint>
              <mat-error>New Password is required</mat-error>
            </mat-form-field>
            <mat-form-field class="password-text" style="margin-top: 1.5%;">
              <input matInput type="password" [formControlName]="'confirm_password'" placeholder="Confirm Password">
              <mat-hint>Password and confirm password should be match</mat-hint>
              <mat-error> Confirm Password is required</mat-error>
            </mat-form-field>
            <div fxLayout="row" fxLayoutAlign="center center">
              <button color="primary" type="submit" class="reset-button" mat-raised-button>
                Reset my password
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
      /*background: #d4f7c8;*/
      /*background-image: -webkit-radial-gradient(top, circle cover, #16CB99, #3FC54B 90%);*/
      /*background-image: -moz-radial-gradient(top, circle cover, #d4f7c8, #3fc54b 90%);*/
      /*background-image: -o-radial-gradient(top, circle cover, #d4f7c8, #3FC54B 90%);*/
      /*background-image: radial-gradient(top, circle cover, #d4f7c8, #3FC54B 90%);*/
      /*background-image: linear-gradient(to right bottom, #3FC54B, #16CB99);*/
      min-height: 100%;
      min-width: 100%;
    }

    .form-text {
      text-transform: uppercase;
      background-image: linear-gradient(to right bottom, #ffab00, #ff8505);
      -webkit-background-clip: text;
      color: transparent;
      font-size: 32px;
      margin-left: .6em;
    }

    .password-text {
      width: 81%;
      margin-left: 9.5%;
    }

    .reset-button {
      margin-top: 10%;
      margin-bottom: 2%;
      color: whitesmoke;
      /*background: #16CB99;*/
      text-transform: uppercase;
    }

    /*::ng-deep .mat-form-field-ripple {*/
    /*background-color: #16CB99 !important;*/
    /**/
    /*}*/
    /*::ng-deep .mat-input-element {*/
    /*color: #16CB99 !important;*/
    /*}*/
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
