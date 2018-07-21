import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {VideoDialogComponent} from '../components/video.dialog.component';

@Component({
  selector: 'app-get-started',
  template: `
    <mat-card fxFlex.xs="90%"  fxFlex="1 1 90%" class="get-res-mat-card">
      <mat-card-header class="animated flipInX get-res-header">World's First Digital Resume <br>Builder is here for you.</mat-card-header>
      <mat-card-content>
        <div fxLayout="column">
          <div class="get-res-button get-button" fxFlex="row" fxLayoutGap="7%">
            <button mat-raised-button class="sign-up-button animated zoomIn time" color="primary" routerLink="/login"
                    style="color: whitesmoke;text-transform: uppercase">Let's Go
            </button>
            <div fxFlex="row" fxLayoutGap="-15px">
              <mat-icon class="mac-icon get-res-mat-icon animated zoomIn _time1">slow_motion_video</mat-icon>
              <a (click)="openDialog()" color="primary" class="no-hover video get-res-video mac-watch-video animated zoomIn _time1">Watch
                Video</a>
            </div>
          </div>
          <div fxFlex="row" fxLayout.xs="column" style="margin-top: 5%" fxLayoutGap="20px" fxLayoutGap.xs="8%">
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
        <mat-card-footer class="mac-footer get-res-mat-footer"></mat-card-footer>
      </mat-card-content>
    </mat-card>

  `
  ,
  styles: [`
    mat-card {
      opacity: 0.8;
      width: 90%;
      margin-left: 5%;
      margin-top: 2.5%;
      height: 70%;
      border-radius: 10px;
    }

    .video {
      color: #DE7D20;
      position: absolute;
      left: 19%;
      top: 38.5%;
      cursor: pointer;
    }

    .get-button {
      margin-top: 4%;
      margin-left: 2%;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1.5px;
    }

    mat-card-header {
      font-size: 48px;
      /*background-image: linear-gradient(to right bottom, #e79f13, #ff6803);*/
      /*-webkit-background-clip: text;*/
      color: #ffab00;
      text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.75);
      margin-left: -2%;
    }

    iframe {
      height: 76%;
      width: 100%;
    }

    mat-icon {
      color: #e79f13;
      position: absolute;
      bottom: 57.5%;
      left: 16.2%;
      align-self: center
    }

    .sign-up-button:hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .39);
    }

    .mat-button.no-hover ::ng-deep .mat-button-focus-overlay {
      background: none;
    }

    h1 {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1.5px;
      line-height: 26px;
      color: #ffab00;
      margin-bottom: 3%;
    }

    p {
      font-size: 14px;
      line-height: 24px;
      color: #757575;
      font-weight: bold;
    }

    .time {
      animation-duration: 2s;
      animation-delay: 1s;
    }

    ._time1 {
      animation-duration: 2s;
      animation-delay: 2s;
    }

    mat-card-footer {
      background-color: #b1b1b1;;
      padding: 3%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-top: 2%;
    }
  `]
})
export class GetStartedComponent {
  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      height: '400px',
      width: '600px',
      backdropClass: 'video-dialog',
      panelClass: 'video-dialog-panel-class'
    });
  }
}
