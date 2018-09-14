
import {filter, takeWhile} from 'rxjs/operators';
import {Component, OnDestroy} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';
import {AlertService} from '../../core/services/alert.service';

@Component({
  selector: 'app-email-verification',
  template: `
    <ng-container *ngIf="!loading">
      <div fxLayoutAlign="center center">
        <div fxLayout="column" fxLayoutGap="10px">
          <mat-card class="verify-mat-card" fxFlex="100%"
                    style="background-color: #000000; box-shadow: inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2);">
            <div fxLayout="row" fxLayoutAlign="center center">
              <mat-icon class="verify-icon">unsubscribe</mat-icon>
            </div>
            <h1 class="verify-text">You have'nt Verified your Email yet.</h1>
            <p class="verify-text" style="margin-left: 6%">
              Please verify your email which is sent to {{email}} before continuing</p>
            <div fxLayout="row" fxLayoutAlign="center center">
              <button (click)="sendEmail()" type="submit" class="reset-button" mat-raised-button>
                Send Email Again
              </button>
            </div>
          </mat-card>
        </div>
      </div>
    </ng-container>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`

    .verify-mat-card {
      max-width: 80%;
      text-align: center;
      margin-left: 10%;
      margin-top: 16.5%;
    }

    .verify-text {
      color: #3FC54B;
      margin-bottom: 3%;
    }

    .verify-icon {
      font-size: 96px;
      display: block;
      border: 4px solid #16CB99;
      width: 21%;
      height: auto;
      padding-top: 2%;
      padding-left: .5%;
      border-radius: 100px;
      color: #16cb99;
      margin-bottom: 8%;
      margin-top: 2%;
      transition: all .2s;
    }

    .reset-button {
      margin-top: 7%;
      margin-bottom: 2%;
      color: whitesmoke;
      background: #16cb99;
      text-transform: uppercase;
    }
  `]
})
export class EmailVerificationComponent implements OnDestroy {
  email = '';
  loading = false;
  isAlive = true;
  code;

  constructor(private authRepo: AuthRepoService, private alert: AlertService) {
    document.body.style.background = 'linear-gradient(to right bottom, #7de261, #427bb5)';
    this.fetchEmail();
  }

  fetchEmail() {
    this.loading = true;
    this.authRepo.getMe().pipe(takeWhile(() => this.isAlive), filter(res => !!res)).subscribe((res) => {
      this.email = res.email;
      this.code = res.code;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  sendEmail() {
    this.loading = true;
    const data = {
      email: this.email,
      code: this.code
    };
    this.authRepo.sendEmailVerification(data).subscribe((res) => {
      this.loading = false;
      this.alert.success('Verification Email has been sent to' + this.email);
    }, (error) => {
      this.loading = false;
    });
  }
}
