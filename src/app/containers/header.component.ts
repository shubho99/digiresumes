import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="major" style="height: 13%;padding-left:20px; width: 106%" fxLayout="row"
         fxLayoutAlign="start center">
      <span fxFlex="1 1 auto"></span>
      <div fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="start center"
           style="margin-right: 5px; margin-top: 1.5%" fxFlex="1 1 auto">
        <button style="animation-delay:0.5s" mat-button routerLink="/home" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Home
        </button>
        <button style="animation-delay: 1s" mat-button routerLink="/get-started" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Get Started
        </button>
        <button style="animation-delay: 1.5s" mat-button routerLink="/signup"
                routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">Sign Up
        </button>
        <button style="animation-delay: 2s" mat-button routerLink="/login" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Login
        </button>
        <button style="animation-delay: 2.5s" mat-button routerLink="/contact-us"
                routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">ContactUs
        </button>
      </div>
    </div>
  `,
  styles: [`
    .major {
      background: linear-gradient(132deg, #ec5218, #1665c1);
      background-size: 400% 400%;
      width: 100%;
      animation: BackgroundGradient 10s ease infinite;
      box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.2);
    }


    @keyframes BackgroundGradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .selected {
      border: 1px solid;
    }

    time {
      animation-duration: 1s;
    }
  `]
})
export class HeaderComponent {
}
