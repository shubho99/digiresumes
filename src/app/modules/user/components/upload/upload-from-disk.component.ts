import {filter, take, map, takeWhile} from 'rxjs/operators';
import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {YoutubeUploadComponent} from './youtube-upload.component';
import {AlertService} from '../../../core/services/alert.service';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-upload-from-disk',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50px">
      <h1>Select a video from your computer to upload</h1>
      <p style="color: #767270">(Upload your introduction video for Resume)</p>
      <div *ngIf="!videoSelected" fxLayoutAlign="center center" style="margin-top: 20px" fxLayout="row">
        <input type="file" #videoFile name="video" accept="video/*" (change)="selectVideo($event)" hidden>
        <button mat-raised-button color="primary" (click)="pickfile()">
          <mat-icon>add</mat-icon>
          SELECT
        </button>
      </div>
      <div [hidden]="!videoSelected">
        <video *ngIf="!this.isUploaded" id="video" #video controls>
          Your browser does not support HTML5 video.
        </video>
        <iframe *ngIf="this.isUploaded" [src]=" url| safeUrl" #iframe width="124%" height="212px" frameborder="0" 
                class="res-upload-video"   allowfullscreen="true">
        </iframe>
      </div>
      <div *ngIf="this.videoSelected" fxLayoutAlign="center center" fxLayout="row" fxLayoutGap="20px" fxLayoutGap.xs="5px">
        <button *ngIf="this.isUploaded" mat-raised-button color="primary"
                (click)="deleteVideo()">Delete Video
        </button>
        <button *ngIf="!this.isUploaded" mat-raised-button color="primary" matTooltip="This will be a Private video"
                (click)="youtubeSubmit()">Upload to Youtube
        </button>
        <input type="file" #videoFile name="video" accept="video/*" (change)="selectVideo($event)" hidden>
        <button mat-raised-button color="primary" (click)="pickfile()">
          <mat-icon>cached</mat-icon>
          <strong>CHANGE</strong></button>
      </div>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    h1 {
      color: #538ec3;
      text-align: center;
    }

    #video {
      width: 330px;
    }
    button {
      text-transform: uppercase;
    }
  `]
})
export class UploadFromDiskComponent implements OnDestroy {
  @ViewChild('videoFile') nativeInputFile: ElementRef;
  @ViewChild('video') video: any;
  resume: Resume;
  file: File;
  videoSelected = false;
  loading = false;
  isAlive = true;
  isUploaded = false;
  url;

  constructor(public resumeRepo: ResumeRepoService, private route: ActivatedRoute,
              private dialog: MatDialog, private alertService: AlertService) {
    this.fetchResume();
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

  youtubeSubmit() {
    const dialog = this.dialog.open(YoutubeUploadComponent, {
      data: {video: this.file, resume: this.resume}
    });
    dialog.updateSize('70%', '70%');
  }

  fetchResume() {
    this.resumeRepo.getCurrentResumeId().pipe(takeWhile(() => this.isAlive)).subscribe((res) => {
      if (res) {
        this.resumeRepo.getResume(res).pipe(takeWhile(() => this.isAlive)).subscribe((resume) => {
          this.resume = resume;
          this.isUploaded = !!this.resume.video_url;
          if (this.isUploaded) {
            this.videoSelected = true;
            this.url = this.resume.video_url;
          }
        });
      } else {
        this.loading = true;
        this.route.params.pipe(map(params => params['id']), switchMap((id) => {
          return this.resumeRepo.getResume(id);
        })).pipe(take(1), filter(res => !!res),).pipe(takeWhile(() => this.isAlive))
          .subscribe((res) => {
          this.loading = false;
          this.resume = res;
          this.isUploaded = !!this.resume.video_url;
          if (this.isUploaded) {
            this.videoSelected = true;
            this.url = this.resume.video_url;
          }
        }, (err) => {
          this.loading = false;
        });
      }
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  deleteVideo() {
    this.loading = true;
    this.resumeRepo.addOrUpdateVideo({video_url: null}, this.resume._id).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Video Deleted Successfully');
      this.videoSelected = false;
      this.isUploaded = false;
    }, error1 => {
      this.loading = false;
    });
  }
}
