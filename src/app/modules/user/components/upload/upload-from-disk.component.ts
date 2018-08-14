import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-from-disk',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="20px">
      <h2>Select a video from your computer to upload</h2>
      <div *ngIf="!videoSelected" fxLayoutAlign="center center" style="margin-top: 20px" fxLayout="row">
        <input type="file" #videoFile name="video" accept="video/*" (change)="selectVideo($event)" hidden>
        <button mat-raised-button color="accent" (click)="pickfile()">
          <mat-icon>add</mat-icon>
          <strong>Select</strong></button>
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
          <strong>Change</strong></button>
      </div>
    </div>
  `,
  styles: [`
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
