import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';

@Component({
  selector: 'app-single-resume',
  template: `
    <div style="margin-top: 1%; margin-left: 1%" class="alternate" fxLayout="row" fxLayoutGap="20px">
      <button (click)="editResume()" mat-raised-button color="primary">Edit Resume</button>
      <button (click)="editProfile()" mat-raised-button color="accent">Edit profile Video or Picture</button>
    </div>
    <h1 *ngIf="this.resume">{{resume.name}}</h1>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
  `]
})
export class SingleResumeComponent implements OnInit, OnDestroy {
  resume: Resume = null;
  isAlive = true;
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private resumeRepo: ResumeRepoService) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.map(params => params['id']).switchMap((id) => {
      return this.resumeRepo.getResume(id);
    }).take(1).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
      this.loading = false;
      this.resume = res;
    }, (err) => {
      this.loading = false;
    });
  }

  editProfile() {
    this.router.navigateByUrl('/user/edit/profile/' + this.resume._id);
  }

  editResume() {
    this.router.navigateByUrl('/user/edit/resume/' + this.resume._id);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
