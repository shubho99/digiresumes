import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {ApiService} from '../../core/services/api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-template',
  template: `
    <div fxLayout="column" id="html" class="html" fxLayoutGap="5px" fxFlexAlign="center center">
      <div>
        <h1 style="text-transform: uppercase !important;
          font-size: 40px; text-align: center">{{this.resume.contact_details.first_name}}
          {{this.resume.contact_details.last_name}}</h1>
        <p class="center-align small-p">{{this.resume.contact_details.address}}<br>
          {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-{{this.resume.contact_details.zip_code}}<br>
          {{this.resume.contact_details.phone_number}}
        </p>
        <h5 style="color: #538ec3" class="center-align"><u>{{this.resume.contact_details.email}}</u></h5>
      </div>
      <div style="margin-top: 1%">
        <p style="    border-bottom: 2px solid;
    padding-bottom: 30px;font-family: SERIF;font-size: 18px" class="center-align">{{this.resume.contact_details.summary}}</p>
      </div>
      <div>
        <h1>PROFESSIONAL EXPERIENCE</h1>
        <ng-container *ngFor="let industrialExposure of this.resume['industrialExposures']">
          <h3 class="h3-span">{{industrialExposure.organisation}}</h3>
          <span class="h3-span" style="color: #5da4d9" *ngIf="industrialExposure.end_month">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}} - 
                    {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                  </span>
          <span class="h3-span" style="color: #5da4d9" *ngIf="!industrialExposure.end_month">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}}
                  </span>
          <h4 class="indus-p-h4">
            {{industrialExposure.city}}, {{industrialExposure.state}}
          </h4>
          <p class="container indus-p-h4">{{industrialExposure.work}}</p>
        </ng-container>
      </div>
      <div>
        <h1>EDUCATION</h1>
        <ng-container *ngFor="let education of this.resume['education']">
          <app-education-card [education]="education"></app-education-card>
        </ng-container>
      </div>
      <div class="border">
        <h1 style="margin-bottom: 2%">ADDITIONAL SKILLS</h1>
        <ng-container *ngFor="let skill of this.resume['skills']">
          <ul>
            <li>
              {{skill.skill}}
            </li>
          </ul>
        </ng-container>
      </div>
      <div class="border">
        <h1 style="margin-bottom: 2%">AWARD AND ACHIEVEMENTS</h1>
        <ng-container *ngFor="let award of this.resume['award_achivements']">
          <ul>
            <li>
              {{award.awards_and_achivements}}
            </li>
          </ul>
        </ng-container>
      </div>
      <div class="border">
        <h1>PROJECT DETAILS</h1>
        <ng-container *ngFor="let projectDetail of this.resume['projectDetails']">
          <app-project-detail-card [projectDetail]="projectDetail"></app-project-detail-card>
        </ng-container>
      </div>
      <div class="border">
        <h1>OBJECTIVES</h1>
        <ng-container *ngFor="let objective of this.resume['objectives']">
          <app-objective-card [objective]="objective"></app-objective-card>
        </ng-container>
      </div>
      <div class="border">
        <h1>ADDITIONAL INTERESTS</h1>
        <ng-container *ngFor="let interest of this.resume['interests']">
          <app-interest-card [interest]="interest"></app-interest-card>
        </ng-container>
      </div>
      <div class="border">
        <h1>LANGUAGES I SPEAK</h1>
        <ng-container *ngFor="let language of this.resume['languages']">
          <p class="contact-summary">{{language.name}}</p>
        </ng-container>
      </div>
      <style type="text/css">
        .name {
          text-transform: uppercase !important;
          font-size: 40px;
        }

        .center-align {
          text-align: center;
        }

        .small-p {
          font-size: 15px;
          color: #767270;
          word-break: break-word;
        }

        .h3-span {
          text-transform: uppercase;
          color: #767270;
          margin-top: 5%;
        }

        div {
          margin-left: 1%;
        }

        .border {
          border-bottom: 1px solid #767270;
          padding-bottom: 6px;
        }

        .container {
          padding-bottom: 4%;
          border-bottom: 1px solid #767270;
        }

        .indus-p-h4 {
          color: #767270;
        }

        ul {
          color: #767270;
          font-weight: bold;
          font-size: 16px;
          margin-left: 3%;
        }
      </style>
    </div>
    <div>
      <button mat-raised-button color="primary" (click)="Export2Doc('html','test')">Save</button>
    </div>

  `,
  styles: [`

  `]
})
export class TemplatesComponent implements OnInit, OnDestroy {
  @ViewChild('html') html: ElementRef;
  isAlive = true;
  resume: Resume;

  constructor(private router: Router, private route: ActivatedRoute,
              private resumeRepo: ResumeRepoService, private service: HttpClient) {
  }

  ngOnInit() {
    this.route.params.map(params => params['id']).switchMap((id) => {
      return this.resumeRepo.getResume(id);
    }).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
      this.resume = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  // download() {
  //   const data = {
  //     html: document.getElementById('html')
  //   };
  //   this.service.post('https://resume-app-api.herokuapp.com/api/resume/add/pdf', data,
  //     {responseType: 'arraybuffer'}).subscribe((res) => {
  //     console.log(res);
  //     const file = new Blob([res], {type: 'application/pdf'});
  //     const fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  //   });
  // }

  Export2Doc(element, filename = '') {
    const html = document.getElementById(element).innerHTML;
    const blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
    });

    // Specify link url
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + '.docx' : 'document.docx';

    // Create download link element
    const downloadLink = document.createElement('a');

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }

}



