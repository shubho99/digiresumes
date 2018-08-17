import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-from-disk',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50px">
      <h1>Select a video from your computer to upload</h1>
      <div *ngIf="!videoSelected" fxLayoutAlign="center center" style="margin-top: 20px" fxLayout="row">
        <input type="file" #videoFile name="video" accept="video/*" (change)="selectVideo($event)" hidden>
        <button mat-raised-button color="accent" (click)="pickfile()">
          <mat-icon>add</mat-icon>
          SELECT</button>
      </div>
      <div [hidden]="!videoSelected">
        <video id="video" #video controls>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div *ngIf="this.videoSelected" fxLayoutAlign="center center" fxLayout="row" fxLayoutGap="20px">
        <button mat-raised-button color="accent" (click)="youtubeSubmit()">Upload to Youtube</button>
        <input type="file" #videoFile name="video" accept="video/*" (change)="selectVideo($event)" hidden>
        <button mat-raised-button color="accent" (click)="pickfile()">
          <mat-icon>cached</mat-icon>
          <strong>CHANGE</strong></button>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      color: #7de261;
      text-shadow: 1px 0px 2px rgba(0, 0, 0.75);
    }
    #video {
      width: 330px;
    }
  `]
})
export class UploadFromDiskComponent {
  @ViewChild('videoFile') nativeInputFile: ElementRef;
  @ViewChild('video') video: any;
  file: File;
  videoSelected = false;

  constructor() {
  }

  selectVideo(event) {
    this.videoSelected = true;
    if (navigator.userAgent.search('Firefox')) {
      this.file = event.target.files[0];
    } else {
      this.file = event.srcElement.files[0];
    }
    this.video.nativeElement.src = window.URL.createObjectURL(this.file);
  }

  pickfile() {
    this.nativeInputFile.nativeElement.click();
  }

  youtubeSubmit(){

  }
}
