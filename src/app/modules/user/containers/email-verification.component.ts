import {Component} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';

@Component({
  selector: 'app-email-verification',
  template: `
    <ng-container *ngIf="!loading">
      <div  fxLayoutAlign="center center">
        <div fxLayoutGap="10px" style="height: 50%; width: 50%" fxLayout="column">
          <mat-card fxFlex="100%">
            <h1>You have'nt Verified your Email yet.</h1>
            <p>Please verify your email which is sent to {{email}} before continuing</p>
            <button mat-raised-button color="primary">Send Email Again</button>
          </mat-card>
        </div>
      </div>
    </ng-container>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
  `]
})
export class EmailVerificationComponent {
  email = '';
  loading = false;

  constructor(private authRepo: AuthRepoService) {
    document.body.style.background = 'linear-gradient(to right bottom, #7de261, #427bb5)';
    this.fetchEmail();
  }

  fetchEmail() {
    this.loading = true;
    this.authRepo.getMe().filter(res => !!res).subscribe((res) => {
      this.email = res.email;
      this.loading = false;
    });
  }
}
