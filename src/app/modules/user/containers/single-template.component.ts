
import {filter, map, switchMap} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {HttpClient} from '@angular/common/http';
import {TemplateType} from '../../core/utils/utils';
import {takeWhile} from 'rxjs/internal/operators';

@Component({
  selector: 'app-template',
  template: `
    <app-classic-template (downloadTemplate)="download($event)" [resume]="resume"
                          *ngIf="this.templateId == templateType.CLASSIC_TEMPLATE">
    </app-classic-template>
    <app-blues-template [resume]="resume" (downloadTemplate)="download($event)"
                        *ngIf="this.templateId == templateType.BLUES_TEMPLATE">
    </app-blues-template>
    <app-royal-template [resume]="resume" (downloadTemplate)="download($event)"
                        *ngIf="this.templateId == templateType.ROYAL_TEMPLATE">
    </app-royal-template>
    <app-traditional-template [resume]="resume" (downloadTemplate)="download($event)"
                              *ngIf="this.templateId == templateType.TRADITIONAL_TEMPLATE">
    </app-traditional-template>
    <app-modern-template [resume]="resume" (downloadTemplate)="download($event)"
                         *ngIf="this.templateId == templateType.MODERN_TEMPLATE">
    </app-modern-template>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`

  `]
})
export class SingleTemplateComponent implements OnInit, OnDestroy {
  isAlive = true;
  resume: Resume;
  loading = false;
  templateId;
  templateType = TemplateType;

  constructor(private router: Router, private route: ActivatedRoute,
              private resumeRepo: ResumeRepoService, private service: HttpClient) {
  }

  ngOnInit() {
    this.fetchResume();
    this.route.params.pipe(map(params => params['templateId'])).subscribe((res) => {
      this.templateId = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchResume() {
    this.loading = true;
    this.route.params.pipe(map(params => params['id']), switchMap((id) => {
      return this.resumeRepo.getResume(id);
    })).pipe(filter(res => !!res)).pipe(takeWhile(() => this.isAlive)).subscribe((res) => {
      this.resume = res;
      this.loading = false;
    });
  }

  download(html) {
    this.loading = true;
    const data = {
      html: html
    };
    this.service.post('https://resume-app-api.herokuapp.com/api/resume/add/pdf', data,
      {responseType: 'arraybuffer'}).subscribe((res) => {
      const file = new Blob([res], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      this.loading = false;
      window.open(fileURL);
    });
  }
}

// https://resume-app-api.herokuapp.com


