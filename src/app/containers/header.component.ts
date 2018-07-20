import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="major res-header" fxLayout="row"
         fxLayoutAlign="start center">
      <span fxFlex="1 1 auto"></span>
      <div fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="start center"
           fxFlex="1 1 auto" fxHide.xs>
        <button  style="animation-delay:0.5s" mat-button routerLink="/home" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Home
        </button>
        <button style="animation-delay: 1s" mat-button routerLink="/get-started" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Get Started
        </button>
        <button style="animation-delay: 1.5s" mat-button routerLink="/login" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Login
        </button>
        <button style="animation-delay: 2s" mat-button routerLink="/contact-us"
                routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">Contact Us
        </button>
      </div>
      <div fxLayoutAlign="start center " fxFlex="100%" fxHide.gt-xs>
        <button style="margin-top: 4%;
    margin-left: -5%; color: #ffab00" mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon>dehaze</mat-icon>
        </button>
        <mat-menu #menu="matMenu" direction="vertical" [overlapTrigger]="false" style="background-color: #2e2e2e">
          <button style="color: #ff8505" mat-menu-item routerLink="/home" routerLinkActive="selected-small">Home</button>
          <button style="color: #ff8505" mat-menu-item routerLink="/get-started" routerLinkActive="selected-small">Get Started</button>
          <button style="color: #ff8505" mat-menu-item routerLink="/login" routerLinkActive="selected-small">Login
          </button>
          <button style="color: #ff8505" mat-menu-item color="primary" routerLink="/contact-us" routerLinkActive="selected-small">Contact Us
          </button>
        </mat-menu>
      </div>
    </div>
  `,
  styles: [`
    .major {
      background: linear-gradient(132deg, #ec5218, #1665c1);
      background-size: 400% 400%;
      background-repeat: no-repeat;
      animation: BackgroundGradient 10s ease infinite;
      box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.2);
      height: 10%;
      padding-left: 20px;
      width: 106%
    }

    .selected-small {
      border: 1px solid #ff8505 !important;
      width: 61% !important;
      /*text-align: center !important;*/
    }

    .mat-menu-panel {
      width: 1007px;
      height: 1018px;
      background: #1d1c1bc2;
      margin-left: -7% !important;
      margin-top: 2%;
    }

    .mat-menu-content {
      padding-top: 68% !important;
      padding-left: 31% !important;
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
      border: 1px solid #ff8505 !important;
    }

    time {
      animation-duration: 1s;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
}
