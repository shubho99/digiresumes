import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../modules/core/services/alert.service';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';
import {Router} from '@angular/router';
import {ExperienceLevel, JobCategories} from '../modules/core/utils/utils';

@Component({
  selector: 'app-login',
  template: `
    <form class="res-login animated fadeInLeft" [formGroup]="userForm">
      <input checked id='signin' name='action' type='radio' value='signin'>
      <label class="res-input-login" (click)="loginLabel()" for='signin'>login</label>
      <input id='signup' name='action' type='radio' value='signup'>
      <label class="res-input-signup" (click)="signUpLabel()" for='signup'>Sign up</label>
      <input id='reset' name='action' type='radio' value='reset'>
      <label class="res-input-reset" (click)="resetLabel()" for='reset'>Reset</label>
      <div id='wrapper'>
        <div id='arrow'></div>
        <ng-container>
          <input id='email' placeholder='Email' type='text' [formControlName]="'email'">
          <mat-error class="email-error" *ngIf="this.email.dirty && this.email.invalid">{{getEmailErrorMessage()}}</mat-error>
        </ng-container>
        <ng-container>
          <input id='pass' placeholder='Password' [hidden]="this.isResetButton" [formControlName]="'password'" type='password'>
          <mat-error class="password-error" *ngIf="this.password.dirty && this.password.invalid">{{getPasswordError()}}</mat-error>
        </ng-container>
        <ng-container>
          <input id='name' placeholder='Full Name' type='text' [formControlName]="'name'" [hidden]="this.isLoginButton 
          || this.isResetButton">
          <mat-error class="name-error" *ngIf="this.name.dirty && this.name.invalid">{{getNameError()}}</mat-error>
        </ng-container>
        <ng-container>
          <input id='repass' placeholder='confirm password' type='password' [formControlName]="'confirm_password'"
                 [hidden]="this.isLoginButton || this.isResetButton">
          <mat-error class="confirm-password-error" *ngIf="this.confirm_password.dirty && this.confirm_password.invalid">
            {{getConfirmPasswordError()}}
          </mat-error>
        </ng-container>
        <ng-container>
          <select [formControlName]="'job_category'" [hidden]="this.isLoginButton">
            <option value="" disabled selected>Job Category</option>
            <option *ngFor="let option of jobCategories" [value]="option">{{option}}</option>
          </select>
        </ng-container>
        <ng-container>
          <select [formControlName]="'experience_level'" style="margin-top: 2%" [hidden]="this.isLoginButton">
            <option value="" disabled selected>Experienced Level</option>
            <option *ngFor="let option of this.experienceLevel" [value]="option">{{option}}</option>
          </select>
        </ng-container>
      </div>
      <button *ngIf="this.isResetButton" [disabled]="this.email.invalid" (click)="resetPassword()">Reset password</button>
      <button *ngIf="this.isLoginButton" [disabled]="this.email.invalid || this.password.invalid"
              (click)="login()">Login
      </button>
      <button *ngIf="this.isSignUpButton" style="margin-top: -3%;" [disabled]="this.userForm.invalid" (click)="signUp()">Sign up</button>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>
    <app-footer [isLoginResponsive]="true" footerMargin="50%"></app-footer>
  `,
  styles: [`

    :focus {
      outline: none;
    }

    select {
      width: 100%;
      height: 15%;
      font-size: 1em;
      color: #ff8505;
    }

    ::-webkit-input-placeholder {
      color: #DEDFDF;
    }

    ::-moz-placeholder {
      color: #DEDFDF;
    }

    :-moz-placeholder {
      color: #DEDFDF;
    }

    ::-ms-input-placeholder {
      color: #DEDFDF;
    }

    #wrapper, label, #arrow, button {
      transition: all .5s cubic-bezier(.6, 0, .4, 1);
    }

    #wrapper {
      overflow: hidden;
    }

    #signin:checked ~ #wrapper {
      height: 134px;
    }

    #signin:checked ~ #wrapper #arrow {
      left: 32px;
    }

    #signin:checked ~ button span {
      transform: translate3d(0, -72px, 0);
    }

    #signup:checked ~ #wrapper {
      height: 407px;
    }

    #signup:checked ~ #wrapper #arrow {
      left: 137px;
    }

    #signup:checked ~ button span {
      transform: translate3d(0, -144px, 0);
    }

    #reset:checked ~ #wrapper {
      height: 72px;
    }

    #reset:checked ~ #wrapper #arrow {
      left: 404px;
    }

    #reset:checked ~ button span {
      transform: translate3d(0, 0, 0);
    }

    form {
      width: 450px;
      height: 370px;
      margin: -185px -225px;
      position: absolute;
      left: 50%;
      top: 55%;
    }

    input[type=radio] {
      display: none;
    }

    label {
      cursor: pointer;
      color: #ff8505;
      display: inline-block;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 1.5px;
      opacity: .5;
      margin-bottom: 30px;
      text-transform: uppercase;
    }

    label:hover {
      transition: all .3s cubic-bezier(.6, 0, .4, 1);
      opacity: 1;
      color: #ffab00;
    }

    label[for="signin"] {
      margin-right: 20px;
    }

    label[for="reset"] {
      float: right;
      margin-right: 1%;
    }

    input[type=radio]:checked + label {
      opacity: 1;
    }

    input[type=text],
    input[type=password] {
      background: #fff;
      color: #ff8505;
      border: none;
      border-radius: 8px;
      font-size: 20px;
      height: 50px;
      width: 99.5%;
      margin-bottom: 10px;
      opacity: 1;
      text-indent: 20px;
      transition: all .2s ease-in-out;
    }

    button {
      background: #ff8505;
      border: none;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-top: -3px;
      text-transform: uppercase;
      height: 50px;
      width: 100%;
      margin-bottom: 10px;
      overflow: hidden;
      transition: all .3s cubic-bezier(.6, 0, .4, 1);
      font-size: 20px;
    }

    .email-error {
      position: absolute;
      top: 22%;
      left: 70%;
      font-size: 12px;
      text-align: center;
    }

    .password-error {
      position: absolute;
      top: 37%;
      left: 60%;
      font-size: 12px;
      text-align: center;
    }

    .name-error {
      position: absolute;
      top: 55%;
      left: 65%;
      font-size: 12px;
      text-align: center;
    }

    .confirm-password-error {
      position: absolute;
      bottom: 21%;
      left: 51%;
      font-size: 12px;
      text-align: center;
    }

    button span {
      display: block;
      line-height: 72px;
      position: relative;
      top: -12px;
      transform: translate3d(0, 0, 0);
    }

    button:hover {
      background: #ffab00;
    }

    #arrow {
      height: 0;
      width: 0;
      border-bottom: 10px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      position: relative;
      left: 32px;
    }
  `]
})
export class LoginComponent {
  isSignUpButton = false;
  isLoginButton = true;
  isResetButton = false;
  loading = false;
  jobCategories = JobCategories;
  experienceLevel = ExperienceLevel;
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  confirm_password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  name = new FormControl('', [Validators.required]);
  job_category = new FormControl('', [Validators.required]);
  experience_level = new FormControl('', [Validators.required]);
  userForm: FormGroup;

  constructor(private alertService: AlertService, private authRepo: AuthRepoService, private router: Router) {
    this.userForm = new FormGroup({
      email: this.email,
      name: this.name,
      password: this.password,
      confirm_password: this.confirm_password,
      job_category: this.job_category,
      experience_level: this.experience_level
    });
  }

  loginLabel() {
    this.isLoginButton = true;
    this.isResetButton = false;
    this.isSignUpButton = false;
    this.userForm.reset();
  }

  signUpLabel() {
    this.isLoginButton = false;
    this.isResetButton = false;
    this.isSignUpButton = true;
  }

  resetLabel() {
    this.isLoginButton = false;
    this.isResetButton = true;
    this.isSignUpButton = false;
    this.userForm.reset();
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getNameError() {
    return this.name.hasError('required') ? 'Name is Required' : '';
  }


  getPasswordError() {
    return this.password.hasError('required') ? 'Password is Required' :
      this.password.hasError('minlength') ? 'Password must be of 8 character' : '';
  }

  getConfirmPasswordError() {
    return this.confirm_password.hasError('required') ? 'Confirm password  is Required' :
      this.confirm_password.hasError('minlength') ? 'Confirm password  must be of 8 character' : '';
  }

  login() {
    this.loading = true;
    const data = {
      email: this.email.value,
      password: this.password.value
    };
    this.authRepo.login(data).subscribe((res) => {
      this.loading = false;
      this.router.navigate(['user']);
    }, error => {
      this.loading = false;
      this.alertService.error(error.error.message);
    });
  }

  signUp() {
    this.loading = true;
    if (this.password.value !== this.confirm_password.value) {
      this.loading = false;
      this.alertService.error('Password and confirm password does not match');
    }
    this.authRepo.signUp(this.userForm.value).subscribe((res) => {
      this.loading = false;
      this.alertService.success('A verification email has been sent to you at ' + this.email.value, 4000);
    }, error => {
      this.loading = false;
      this.alertService.error(error.error.message);
    });
  }

  resetPassword() {
    this.loading = true;
    this.authRepo.sendResetPasswordEmail(this.email.value).subscribe((res) => {
      this.loading = false;
      this.alertService.success('A Password Reset email has been sent to you at ' + this.email.value, 4000);
    }, error => {
      this.loading = false;
      this.alertService.error(error.error.message);
    });
  }

}
