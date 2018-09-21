import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {Utils} from '../../../core/utils/utils';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-user-onboarding-intro',
  template: `
    <div class="alternate">
      <div style="margin-top: 4%" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50px" class="logo">
        <img style="width: 36%;" src="../../assets/images/digiresume-green.png"/>
        <h1 style="color: #7de261">Welcome to Make my resume!</h1>
        <h3>From the whole team here, thank you for trying us.
          We are committed to make it easier for you to do great work.</h3>
      </div>  
      <div fxLayoutAlign="center center">
        <button (click)="go()" style="margin-top: 1%; text-transform: uppercase" color="accent" fxLayoutAlign="end" mat-raised-button>Let's
          go
        </button>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Yatra+One');

    h3 {
      color: rgba(51, 51, 51, 0.5);
      margin-bottom: 50px;
    }

    .pic {
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
      min-width: 0;
      border-radius: 50%;
    }
  `]
})
export class OnboardingIntroComponent {
  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = '#fafafa';
      document.body.style.fontFamily = 'Yatra One, cursive';
    }
  }

  go() {
    this.router.navigate(['user', 'onboarding', 'add']);
  }
}
