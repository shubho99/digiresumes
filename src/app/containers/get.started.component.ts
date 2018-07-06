import {Component} from '@angular/core';

@Component({
  selector: 'app-get-started',
  template: `
    <mat-card>
      <mat-card-header>World's First Digital Resume <br>Builder is here for you.</mat-card-header>
      <mat-card-content>
        <div fxLayout="column">
          <div style="    margin-top: 4%;
    margin-left: 2%;" fxFlex="row">
            <button mat-raised-button class="sign-up-button" color="primary" style="color: whitesmoke">Sign UP</button>
            <div fxFlex="row" style="margin-left: 6%;" fxLayoutGap="0px">
              <mat-icon>slow_motion_video</mat-icon>
              <a color="primary" class="no-hover" mat-button>Watch Video</a>
            </div>
          </div>
          <div fxFlex="row" style="margin-top: 5%" fxLayoutGap="20px">
            <div fxFlex="column">
              <h1>Build Digital Resume <br>And share your link</h1>
              <p>Firebase gives you functionality like analytics, databases, messaging
                and crash reporting so you can move quickly and focus on your users</p>
            </div>
            <div fxFlex="column">
              <h1>Build Digital Resume <br>And share your link</h1>
              <p>Firebase gives you functionality like analytics, databases, messaging
                and crash reporting so you can move quickly and focus on your users</p>
            </div>
            <div fxFlex="column">
              <h1>Build Digital Resume <br>And share your link</h1>
              <p>Firebase gives you functionality like analytics, databases, messaging
                and crash reporting so you can move quickly and focus on your users</p>
            </div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer>
      </mat-card-footer>
    </mat-card>
  `
  ,
  styles: [`
    mat-card {
      opacity: 0.8;
      width: 90%;
      margin-left: 3%;
      margin-top: 3%;
      height: 70%;
      border-radius: 10px;
    }

    mat-card-header {
      font-size: 48px;
      background-image: linear-gradient(to right bottom, #e79f13, #ff6803);
      -webkit-background-clip: text;
      color: transparent;
      margin-left: -2%;
    }

    iframe {
      height: 76%;
      width: 100%;
    }

    mat-icon {
      position: absolute;
      left: 16%;
      bottom: 61.5%;
      color: #e79f13;
    }

    .sign-up-button:hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .39);
    }

    .mat-button.no-hover ::ng-deep .mat-button-focus-overlay {
      background: none;
    }

    h1 {
      font-size: 18px;
      line-height: 26px;
      font-weight: 500;
      color: #ffab00;
    }

    p {
      font-size: 14px;
      line-height: 24px;
      color: #757575;
    }

    mat-card-footer {
      background-color: #b1b1b1;;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 40px 114px;
      margin-top: 7%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  `]
})
export class GetStartedComponent {
}
