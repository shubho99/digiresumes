import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="major res-header" fxLayout="row"
         fxLayoutAlign="start center">
      <span fxFlex="1 1 auto"></span>
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div class="res-button">
        <div class="res-button1 header" fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="start center" fxLayout.xs="column wrap"
             fxLayoutAlign.xs="start start"
             fxFlex="1 1 auto">
          <button style="animation-delay:0.5s" mat-button routerLink="/home" routerLinkActive="selected"
                  class="nav-bar-button animated bounceInDown time">Home
          </button>
          <button style="animation-delay: 1s" mat-button routerLink="/get-started" routerLinkActive="selected"
                  class="nav-bar-button animated bounceInDown time">Get Started
          </button>
          <button style="animation-delay: 2s" mat-button routerLink="/login" routerLinkActive="selected"
                  class="nav-bar-button animated bounceInDown time">Login
          </button>
          <button style="animation-delay: 2.5s" mat-button routerLink="/contact-us"
                  routerLinkActive="selected" class="nav-bar-button animated bounceInDown time">Contact Us
          </button>
        </div>
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
      margin-top: -1.2%;
      height: 13%;
      padding-left:20px;
      width: 106%
    }

    label {
      position: absolute;
      left: 93%;     
      font-size: 26px;
      line-height: 70px;
      display: none;
      width: 26px;
    
    }
    #toggle {
      display: none;
      position: absolute;
      margin-left: 86%;
      margin-top: 2%;
    }
    .header {
      margin-left: -110%;
      margin-top: 3.5%;
      
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
