
import {filter, map, takeWhile} from 'rxjs/operators';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../core/services/alert.service';
import {Resume} from '../../../core/models/resume';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-image-upload-component',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="50px">
      <input type="file" (change)="onFileSelected($event)" accept="image/jpeg, image/png" #fileInput hidden/>
      <h1>
        <mat-icon>cloud_upload</mat-icon>
        Upload Profile Image
      </h1>
      <mat-hint>Image size must be Upto 2mb</mat-hint>
      <button *ngIf="!this.isUploaded" mat-raised-button type="button" fxFlexAlign="center" color="primary" (click)="selectFile()">
        <mat-icon>{{icon}}</mat-icon>
        <span *ngIf="this.imageSelected">CHANGE</span>
        <span *ngIf="!this.imageSelected">SELECT</span>
      </button>
      <img #previewImg [src]="url" height="200px"/>
      <button (click)="save()" *ngIf="this.imageSelected && !this.isUploaded" mat-raised-button color="primary">SAVE</button>
      <button (click)="delete()" *ngIf="this.isUploaded" mat-raised-button color="primary">Delete</button>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    h1 {
      color: #538ec3;
    }
    button {
      text-transform: uppercase;
    }
  `],
})
export class ImageUploadComponent {
  image;
  file: File;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('previewImg') previewImg: ElementRef;
  imageSelected = false;
  icon = 'add';
  resume: Resume;
  loading = false;
  isAlive = true;
  isUploaded = false;
  url = '';
  MAX_FILE_SIZE = 2 * 1000 * 1000;

  constructor(private resumeRepo: ResumeRepoService, private route: ActivatedRoute, private alertService: AlertService) {
    this.fetchResume();
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    this.file = file;
    if (this.file.size > this.MAX_FILE_SIZE) {
      return this.alertService.error('Image must be smaller than 2mb');
    }
    if (file.type === 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/JPG') {
      this.icon = 'cached';
      this.imageSelected = true;
      this.isUploaded = false;
      this.previewImg.nativeElement.src = window.URL.createObjectURL(this.file);
    } else {
      this.alertService.error('Image must be of type png,jpg or jpeg');
    }
  }

  selectFile() {
    this.fileInput.nativeElement.click();
  }

  fetchResume() {
    this.loading = true;
    this.resumeRepo.getCurrentResumeId().pipe(takeWhile(() => this.isAlive)).subscribe((res) => {
      if (res) {
        this.resumeRepo.getResume(res).pipe(takeWhile(() => this.isAlive)).subscribe((resume) => {
          this.resume = resume;
          this.isUploaded = !!this.resume.image_url;
          if (this.isUploaded) {
            this.imageSelected = true;
            this.url = this.resume.image_url;
          }
          this.loading = false;
        });
      } else {
        this.loading = true;
        this.route.params.pipe(map(params => params['id']), switchMap((id) => {
          return this.resumeRepo.getResume(id);
        })).pipe(filter(data => !!data)).pipe(takeWhile(() => this.isAlive)).subscribe((res) => {
          this.loading = false;
          this.resume = res;
          this.isUploaded = !!this.resume.image_url;
          if (this.isUploaded) {
            this.imageSelected = true;
            this.url = this.resume.image_url;
          }
        }, (err) => {
          this.loading = false;
        });
      }
    });
  }

  save() {
    this.loading = true;
    this.resumeRepo.addOrUpdateImage(this.file, this.resume._id).subscribe((res) => {
      this.loading = false;
      this.isUploaded = true;
      this.alertService.success('Image uploaded Successfully');
    }, () => {
      this.loading = false;
    });
  }

  delete() {
    const imgUrl = this.url.split('/')[3];
    this.loading = true;
    this.resumeRepo.deleteImage({image_url: imgUrl}, this.resume._id).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Image deleted Successfully');
      this.isUploaded = false;
      this.url = '';
      this.imageSelected = false;
    }, () => {
      this.loading = false;
    });
  }
}
