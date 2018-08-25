import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {YoutubeService} from '../../../core/services/youtube.service';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {AlertService} from '../../../core/services/alert.service';
import {Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Utils} from '../../../core/utils/utils';
import {Observable} from 'rxjs/Observable';
import {Resume} from '../../../core/models/resume';

@Component({
  selector: 'app-youtube-upload',
  template: `<div class="alternate">
    <div  *ngIf="!importFailed && youtubeService.profile$ | async as profile">
      <span>Connected Youtube Account: <strong>{{profile.getEmail()}}</strong></span>
      <span class="change" *ngIf="youtubeService.isAuthInit$ | async"
            (click)="youtubeService.signIn()">change account</span>
      <hr>
    </div>
    <form *ngIf="(youtubeService.profile$ | async) && !importing && !importFailed" fxLayout="column"
          fxLayoutAlign="center stretch"
          fxFlexAlign="center" fxLayoutGap="10px"
          [formGroup]="videoForm" (ngSubmit)="videoForm.get('privacyStatus').markAsTouched(); videoForm.valid && onSubmit()" novalidate>
      <mat-form-field style="width: 100%">
        <input matInput placeholder="Title of video" formControlName="title">
        <mat-error>Title is required</mat-error>
      </mat-form-field>
      <mat-form-field style="width: 100%">
        <textarea matInput placeholder="Description of video (optional)" formControlName="description"></textarea>
      </mat-form-field>
      <mat-radio-group formControlName="privacyStatus" style="padding-bottom: 18px">
        <mat-radio-button value="unlisted"
                          matTooltip="Only people to whom you share/email the video will be able to view your video">
          Keep my video private
        </mat-radio-button>
        <mat-radio-button value="public"
                          matTooltip="Your video will be public on YouTube and search engines will also crawl it">
          I want maximum views so make it public
        </mat-radio-button>
        <mat-error *ngIf="videoForm.get('privacyStatus').touched && videoForm.get('privacyStatus').invalid"
                   style="margin-bottom: -18px">
          Select one of the options
        </mat-error>
      </mat-radio-group>
      <div fxLayout="row" fxLayoutAlign="start center" *ngIf="loading">
        <mat-progress-bar
          color="accent"
          [value]="percentUploaded"
          [bufferValue]="100">
        </mat-progress-bar>
        <button mat-icon-button (click)="onCancel()">
          <mat-icon>cancel</mat-icon>
        </button>
      </div>
      <button mat-raised-button fxFlexAlign="end" *ngIf="!loading" color="accent">Upload</button>
    </form>

    <div fxLayout="column" fxLayoutAlign="start center"
         *ngIf="(youtubeService.isAuthInit$ | async ) && !(youtubeService.isSignedIn$ | async)">
      <h2>Please (re)connect your youtube account to upload the video</h2>
      <button mat-raised-button (click)="youtubeService.signIn()" color="accent">Connect YouTube account</button>
    </div>
    <div *ngIf="importing" fxLayoutAlign="center start">
      <mat-spinner color="accent"></mat-spinner>
    </div>
    <div *ngIf="importFailed" fxLayout="column" fxLayoutAlign="start center">
      <h2>Video uploaded to YouTube successfully but import to Vaetas failed.</h2>
      <button mat-raised-button color="accent" (click)="importVideo()">Try Importing Again</button>
      <button mat-raised-button color="primary" (click)="dialogRef.close()">Cancel</button>
    </div>
  </div>
  `,
  styles: [`
    .change {
      text-decoration: underline;
      color: #a7d2f0;
      cursor: pointer;
    }
  `]
})
export class YoutubeUploadComponent implements OnInit, OnDestroy {
  videoForm: FormGroup;
  loading = false;
  percentUploaded = 0;
  subscription: Subscription;
  importFailed = false;
  videoUrl: string;
  importing = false;
  alive = true;
  imported = false;
  resumeId: string;

  constructor(public youtubeService: YoutubeService,
              public resumeRepo: ResumeRepoService,
              @Inject(MAT_DIALOG_DATA) public data: { video: any, resume: Resume },
              public dialogRef: MatDialogRef<YoutubeUploadComponent>,
              public alertService: AlertService,
              public router: Router,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume._id;
    console.log(this.data.resume,this.data.video);
    this.videoForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(),
      'privacyStatus': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.loading = true;
    this.dialogRef.disableClose = true;
    this.subscription = this.youtubeService.uploadVideo(this.data.video, this.videoForm.value).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentUploaded = Math.round(100 * event.loaded / event.total);
          // limit progress to 90 as we consider it 100% complete once video is imported to Vaetas
          this.percentUploaded = Math.min(90, this.percentUploaded);
        } else if (event instanceof HttpResponse) {
          const response: any = event.body;
          this.videoUrl = Utils.getYoutubeUrlFromId(response.id);
          this.importVideo();
        }
      },
      (error) => {
        this.loading = false;
        this.dialogRef.disableClose = false;

        if (error.error instanceof Error) {
          this.alertService.error(error.error.message);
        } else {
          const errorObject = JSON.parse(error.error);
          if (errorObject.error.errors[0].reason === 'youtubeSignupRequired') {
            this.snackBar.open('You need to create a YouTube Channel before you can start uploading videos',
              'Create Channel',
              {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                extraClasses: ['alert-error']
              })
              .onAction().take(1).subscribe(() => window.open('https://www.youtube.com/create_channel',
              '_blank'));
          } else {
            this.alertService.error(errorObject.error.message);
          }
        }
      }
    );
  }

  onCancel() {
    this.subscription.unsubscribe();
    this.loading = false;
    this.dialogRef.close();
  }

  importVideo() {
    this.importing = true;
    this.importFailed = null;
    Observable.timer(0, 10000).take(10).takeWhile(() => this.alive && !this.imported).subscribe(() => {
      this.resumeRepo.addOrUpdateVideo({video_url: this.videoUrl}, this.resumeId)
        .subscribe((resp) => {
          this.loading = false;
          this.importing = false;
          this.imported = true;
          this.alertService.success('Video Uploaded Successfully');
          this.dialogRef.close();
        });
    }, null, () => {
      if (!this.imported) {
        this.importFailed = true;
      }
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
