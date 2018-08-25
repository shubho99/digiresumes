import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {Resume} from '../../../core/models/resume';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-import-video',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addVideo()">
      <div style="margin-top: 3%" fxLayout="column" fxLayoutGap="50px">
        <h2>Import Video from Youtube URL</h2>
        <mat-form-field>
          <input matInput placeholder="Youtube URL">
          <mat-error>Provide YouTube Video URL</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end center">
          <button style="margin-right: 1%" [disabled]="this.form.invalid" mat-raised-button color="primary" [disabled]="loading"
                  color="accent">
            IMPORT
          </button>
        </div>
      </div>
    </form>

  `,
  styles: [`
  `]
})

export class ImportVideoComponent implements OnInit, OnDestroy {
  loading = false;
  form: FormGroup;
  YOUTUBE_REGEX = '^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.' +
    'com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|v\\/)?)([\\w\\-]+)(\\S+)?$';
  resume: Resume;
  isAlive = true;

  constructor(private resumeRepo: ResumeRepoService, private route: ActivatedRoute, private alertService: AlertService) {
  }

  ngOnInit() {
    this.fetchResume();
    this.form = new FormGroup({
      'video_url': new FormControl(null, [Validators.required, Validators.pattern(this.YOUTUBE_REGEX)])
    });
  }

  addVideo() {
    this.loading = true;
    this.resumeRepo.addOrUpdateVideo(this.form.value, this.resume._id).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Video added Successfully');
    }, () => {
      this.loading = false;
    });
  }


  fetchResume() {
    this.resumeRepo.getCurrentResumeId().takeWhile(() => this.isAlive).subscribe((res) => {
      if (res) {
        this.resumeRepo.getResume(res).takeWhile(() => this.isAlive).subscribe((resume) => {
          this.resume = resume;
        });
      } else {
        this.loading = true;
        this.route.params.map(params => params['id']).switchMap((id) => {
          return this.resumeRepo.getResume(id, true);
        }).take(1).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
          this.loading = false;
          this.resume = res;
        }, (err) => {
          this.loading = false;
        });
      }
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
