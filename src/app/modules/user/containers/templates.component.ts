import {Component,  OnDestroy, OnInit, } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-template',
  template: `
   <!--<app-classic-template  [resume]="resume" (downloadTemplate)="download($event)"></app-classic-template>-->
    <!--<app-side-panel-template [resume]="resume" (downloadTemplate)="download($event)"></app-side-panel-template>-->
   <!--<app-royal-template [resume]="resume" (downloadTemplate)="download($event)"></app-royal-template>-->
   <app-blues-template [resume]="resume" (downloadTemplate)="download($event)"></app-blues-template>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`

  `]
})
export class TemplatesComponent implements OnInit, OnDestroy {
  isAlive = true;
  resume: Resume;
  loading = false;
  constructor(private router: Router, private route: ActivatedRoute,
              private resumeRepo: ResumeRepoService, private service: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.map(params => params['id']).switchMap((id) => {
      return this.resumeRepo.getResume(id);
    }).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
      this.resume = res;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  download(html) {
    this.loading = true;
    const data = {
      html: html
    };
    console.log(html);
    this.service.post('http://localhost:5000/api/resume/add/pdf', data,
      {responseType: 'arraybuffer'}).subscribe((res) => {
      const file = new Blob([res], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      this.loading = false;
      window.open(fileURL);
    });
  }
}

//https://resume-app-api.herokuapp.com

