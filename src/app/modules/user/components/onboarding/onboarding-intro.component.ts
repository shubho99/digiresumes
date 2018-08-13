import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-onboarding-intro',
  template: `
    <div class="alternate">
      <div style="margin-top: 4%" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50px" class="logo">
        <img src="https://1mc-kauffman.s3.amazonaws.com/u
ploads/omc_engine/company/logo/15421/display_Logo_Vaetas_flat.png"/>
        <h1>Welcome to Make my resume!</h1>
        <h3>From the whole team here,thank you for trying us.
          we are committed to make it easier for you to do great work.</h3>
      </div>
      <div fxLayoutAlign="center center">
        <img class="pic" src="https://static.intercomassets.com/avatars/26230/square_128/Headshot_JR-1473381964.jpg?1473381964"/>
      </div>
      <h3 fxLayoutAlign="center center">John! Founder and CEO</h3>
      <div fxLayoutAlign="center center">
        <button (click)="go()" style="margin-top: 1%" color="primary" fxLayoutAlign="end" mat-raised-button>Let's go</button>
      </div>
    </div>
  `,
  styles: [`
    h3 {
      color: rgba(51, 51, 51, 0.5);
    }

    .pic {
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
      min-width: 0;
      border-radius: 50%;
    }
  `]
})
export class OnboardingIntroComponent {
  constructor(private router: Router) {
    document.body.style.background = '#fafafa';
  }

  go() {
    this.router.navigate(['user', 'onboarding', 'add']);
  }
}
