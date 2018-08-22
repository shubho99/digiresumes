import {Component, OnDestroy} from '@angular/core';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';

@Component({
  selector: 'app-resumes',
  template: `
    <div *ngIf="this.resumes" fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center">
      <app-resume-card *ngFor="let resume of resumes" [resume]="resume"></app-resume-card>
      <span *appFlexAlignmentHack></span>
    </div>
    <p style="margin-top: 7%; text-align: center" *ngIf="!this.resumes">No resume added yet.</p>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    span {
      height: 255px;
      width: 250px;
      margin: 15px 10px;
    }
  `]
})
export class ResumesComponent implements OnDestroy {
  resumes: Resume[] = [];
  loading = false;
  isAlive = true;

  constructor(private resumeRepo: ResumeRepoService) {
    this.fetchResumes();
  }

  fetchResumes() {
    const resume$ = this.resumeRepo.getAllResumes();
    resume$[0].takeWhile(() => this.isAlive).filter(res => !!res).subscribe((res) => {
      this.resumes = res;
    });
    resume$[1].takeWhile(() => this.isAlive).subscribe((res) => {
      this.loading = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
