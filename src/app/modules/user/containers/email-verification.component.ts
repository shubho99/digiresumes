import {Component, OnDestroy} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';

@Component({
  selector: 'app-email-verification',
  template: `
    <ng-container *ngIf="!loading">
      <div class="alternate" fxLayoutAlign="center center">
        <div fxLayout="column" fxLayoutGap="10px">
          <mat-card fxFlex="100%" style="background-color: #000000; box-shadow: inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2);">
            <div fxLayout="row" fxLayoutAlign="center center">
              <mat-icon class="verify-icon">unsubscribe</mat-icon>
            </div>
            <h1 class="verify-text">You have'nt Verified your Email yet.</h1>
            <p class="verify-text" style="margin-left: 6%">Please verify your email which is sent to {{email}} before continuing</p>
            <div fxLayout="row" fxLayoutAlign="center center">
              <button type="submit" class="reset-button" mat-raised-button>
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
  `]
})
export class EmailVerificationComponent implements OnDestroy {
  email = '';
  loading = false;
  isAlive = true;

  constructor(private authRepo: AuthRepoService) {
    document.body.style.background = 'linear-gradient(to right bottom, #7de261, #427bb5)';
    this.fetchEmail();
  }

  fetchEmail() {
    this.loading = true;
    this.authRepo.getMe().takeWhile(() => this.isAlive).filter(res => !!res).subscribe((res) => {
      this.email = res.email;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
