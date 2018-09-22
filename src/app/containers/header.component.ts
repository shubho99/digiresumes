import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="major res-header" fxLayout="row"
         fxLayoutAlign="start center">
      <img class="img-res" style="width: 15%;" src="../../assets/images/digiresume-orange.png"/>
      <span fxFlex="1 1 285px" fxFlex.xs="1 1 auto"></span>
      <div fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="start center"
           fxFlex="1 1 auto" fxHide.xs>
        <button style="animation-delay:0.5s" mat-button routerLink="/" [routerLinkActiveOptions]="{ exact: true }"
                routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Home
        </button>
        <button style="animation-delay: 1s" mat-button routerLink="/get-started" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Get started
        </button>
        <button style="animation-delay: 1.5s" mat-button routerLink="/login" routerLinkActive="selected"
                class="nav-bar-button animated bounceInDown time">Login
        </button>
        <button style="animation-delay: 2s" mat-button routerLink="/about-us"
                routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">About Us
        </button>
        <button style="animation-delay: 2s" mat-button routerLink="/contact-us"
                routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">Contact Us
        </button>
      </div>
      <div fxLayoutAlign="start end" fxFlex="100%" fxHide.gt-xs>
        <button class="res-icon-menu" style="color: #ffab00;" mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon>dehaze</mat-icon>
        </button>
        <mat-menu #menu="matMenu" class="res-menu-user" direction="vertical" [overlapTrigger]="false" style="background-color: #2e2e2e">
          <div style="transform: translate(-7%, 97%) !important;" class="res-menu-content-user">
            <button style="color: #ff8505" mat-menu-item routerLink="/" [routerLinkActiveOptions]="{ exact: true }"
                    routerLinkActive="selected-small">Home
            </button>
            <button style="color: #ff8505" mat-menu-item routerLink="/get-started" routerLinkActive="selected-small">Get started</button>
            <button style="color: #ff8505" mat-menu-item routerLink="/login" routerLinkActive="selected-small">Login
            </button>
            <button style="animation-delay: 2s" mat-button routerLink="/about-us"
                    routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">About Us
            </button>
            <button style="color: #ff8505" mat-menu-item color="primary" routerLink="/contact-us" routerLinkActive="selected-small">Contact
              Us
            </button>
          </div>
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
})
export class HeaderComponent {
}
