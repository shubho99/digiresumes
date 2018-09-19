import {Component, EventEmitter, Inject, Input, Output, PLATFORM_ID} from '@angular/core';
import {Resume} from '../../../core/models/resume';
import {Utils} from '../../../core/utils/utils';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-blues-template',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <mat-card class="res-blue-container">
        <div id="html">
          <div *ngIf="this.resume.contact_details">
            <ng-container *ngTemplateOutlet="contactDetailsTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.employment_history.length">
            <ng-container *ngTemplateOutlet="workExpTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.industrialExposures.length">
            <ng-container *ngTemplateOutlet="industrialExposureTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.education.length">
            <ng-container *ngTemplateOutlet="educationTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.skills.length">
            <ng-container *ngTemplateOutlet="skillTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.languages.length">
            <ng-container *ngTemplateOutlet="languageTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.award_achivements.length">
            <h1 class="education-heading">Achievements</h1>
            <ng-container *ngFor="let award of this.resume['award_achivements']">
              <app-award-card [award]="award"></app-award-card>
            </ng-container>
          </div>
          <div *ngIf="this.resume.interests.length">
            <h1 class="education-heading">Interests</h1>
            <ng-container *ngFor="let interest of this.resume['interests']">
              <app-interest-card [interest]="interest"></app-interest-card>
            </ng-container>
          </div>
          <div *ngIf="this.resume.objectives.length">
            <ng-container *ngTemplateOutlet="objectiveTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.projectDetails.length">
            <ng-container *ngTemplateOutlet="projectDetailTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.strengths.length">
            <h1 class="education-heading">Strength</h1>
            <ng-container *ngFor="let strength of this.resume['strengths']">
              <ul>
                <li>
                  {{strength.name}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div *ngIf="this.resume.weakness.length">
            <h1 class="education-heading">Weakness</h1>
            <ng-container *ngFor="let weakness of this.resume['weakness']">
              <ul>
                <li>
                  {{weakness.name}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div *ngIf="this.resume.refrences.length">
            <ng-container *ngTemplateOutlet="referenceTemplate"></ng-container>
          </div>
        </div>
        <div class="hover" fxLayout="column">
          <div style="    margin-top: 55%;
    margin-left: 46%;" fxLayout="row">
            <i id="hover-i" (click)="download()" class="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </div>
        </div>
      </mat-card>
    </div>

    <ng-template #skillTemplate>
      <h1 class='education-heading'>Skills</h1>
      <div *ngFor="let skill of this.resume['skills']">
        <ul>
          <li>
            {{skill.skill}}
          </li>
        </ul>
      </div>
    </ng-template>
    <ng-template #referenceTemplate>
      <h1 class="education-heading">References</h1>
      <ng-container *ngFor="let refrence of this.resume['refrences']">
        <h3 class="container h3-span">
          {{refrence.name}} <span class="h3-span" style="text-transform: lowercase; font-size: 10pt;">
                @{{refrence.company}}</span><br>
          {{refrence.relationship}}<br>
          <span class="h3-span" style="text-transform: lowercase">{{refrence.email}}</span><br>
          {{refrence.phone}}<br>
          {{refrence.address}}
        </h3>
      </ng-container>
    </ng-template>
    <ng-template #objectiveTemplate>
      <h1 class="education-heading">Objective</h1>
      <ng-container *ngFor="let objective of this.resume['objectives']">
        <h3 style="color: #767270;" class="h3-span">
          {{objective.objective}}<br>
          {{objective.date}}<br>
          {{objective.place}}
        </h3>
        <p class="h4-p">{{objective.declaration}}</p>
      </ng-container>
    </ng-template>
    <ng-template #contactDetailsTemplate>
      <div>
        <h1 class="main-heading text-align">{{this.resume.contact_details.first_name}}
          {{this.resume.contact_details.last_name}}</h1>
        <p class="address-margin" style="text-align:center;font-size:15px;color:#767270;word-break:break-word;">
          {{this.resume.contact_details.address}}<br>
          {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-{{this.resume.contact_details.zip_code}}
          <br>
          <i class="fa fa-phone" aria-hidden="true"></i>{{this.resume.contact_details.phone_number}}
        </p>
        <h4 class="email-margin" style="color:#538ec3;text-align:center;"><i class="fa fa-envelope" aria-hidden="true"></i>
          <u>{{this.resume.contact_details.email}}</u></h4>
      </div>
      <div class="email-margin" style="    margin-left: 32%;">
        <a class="text-align res-text-align" [href]="this.resume.contact_details.website_url" style="color:#538ec3;text-align:center;">
          <i class="fa fa-link" aria-hidden="true"></i>
          {{this.resume.contact_details.website_url}}</a>
      </div>
      <div class="summary">
        <p>{{this.resume.contact_details.summary}}</p>
      </div>
    </ng-template>

    <ng-template #workExpTemplate>
      <h1 class="education-heading">Work Experience</h1>
      <div *ngFor="let employmentHistory  of this.resume['employment_history']">
        <h3 style="color: #3683cc" class="h3-span">{{employmentHistory.designation}}
          <span class="h3-span" style="text-transform: lowercase !important; font-size: 10pt;color: #3683cc">
                  @{{employmentHistory.organisation}}
                  </span>
        </h3>
        <span class="h3-span exp-span res-down" style="color: #5da4d9;float: right; margin-top: -2%;" *ngIf="employmentHistory.end_month">
                      {{employmentHistory.start_month}} {{employmentHistory.start_year}} - 
                      {{employmentHistory.end_month}} {{employmentHistory.end_year}}
                    </span>
        <span class="h3-span exp-span res-down" style="color: #5da4d9;float: right; margin-top: -2%;" *ngIf="!employmentHistory.end_month">
                      {{employmentHistory.start_month}} {{employmentHistory.start_year}} - Present
                    </span>
        <h4 class="container h4-p h4">
          {{employmentHistory.city}}, {{employmentHistory.state}} <br>
          {{employmentHistory.employer}}
        </h4>
      </div>
    </ng-template>

    <ng-template #educationTemplate>
      <h1 class="education-heading">Education</h1>
      <div *ngFor="let education of this.resume['education']">
        <h3 class="h3-span">{{education.degree_type}}
          <span class="h3-span" style="text-transform: lowercase !important; font-size: 10pt;">@{{education.school_name}}</span></h3>
        <span class="h3-span res-down"
              style="color: #5da4d9; float: right; margin-top: -5%;">{{education.graduation_month}} {{education.graduation_year}}</span>
        <h4 class="container h4 h4-p">
          {{education.city}}, {{education.state}} <br>
          {{education.field}} - {{education.percentage}}
        </h4>
      </div>
    </ng-template>

    <ng-template #industrialExposureTemplate>
      <h1 class="education-heading">Industrial Exposure as an Intern</h1>
      <div *ngFor="let industrialExposure of this.resume['industrialExposures']">
        <h3 class="h3-span">{{industrialExposure.organisation}}</h3>
        <span class="h3-span res-down" style="color: #5da4d9;float: right; margin-top: -5%;" *ngIf="industrialExposure.end_month">
                      {{industrialExposure.start_month}} {{industrialExposure.start_year}} - 
                      {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                    </span>
        <span class="h3-span res-down" style="color: #5da4d9;float: right; margin-top: -5%;" *ngIf="!industrialExposure.end_month">
                      {{industrialExposure.start_month}} {{industrialExposure.start_year}} - Present
                    </span>
        <h4 class="h4-p h4">
          {{industrialExposure.city}}, {{industrialExposure.state}}
        </h4>
        <p class="h4-p" style="margin-top: 4%;" class="container">{{industrialExposure.work}}</p>
      </div>
    </ng-template>

    <ng-template #languageTemplate>
      <h1 class="education-heading">Language I Speak</h1>
      <div *ngFor="let language of this.resume['languages']">
        <ul>
          <li>
            {{language.name}}
          </li>
        </ul>
      </div>
    </ng-template>

    <ng-template #projectDetailTemplate>
      <h1 class="education-heading">Project Details</h1>
      <ng-container *ngFor="let projectDetail of this.resume['projectDetails']">
        <h3 class="h3-span">{{projectDetail.title}} <span style="text-transform: none; font-size: 13pt">
                as a {{projectDetail.role}}</span>
          <span class="h3-span" style="color: #5da4d9; font-weight: 100"> - {{projectDetail.duration}}</span></h3>
        <p style="margin-top: 4%;" class="container h4-p">{{projectDetail.description}}</p>
      </ng-container>
    </ng-template>
  `,
  styles: [`
    
    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
      margin-top: 2%;
    }

    .hover:hover {
      opacity: 0.9;
      transition: opacity .8s;
    }

    .main-heading {
      font-size: 2.5em;
      color: #538ec3;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      margin-top: 1%;
    }

    .summary {
      margin-top: 2%;
      font-family: 'Slabo 27px', serif;
      border-bottom: 2px solid #87b0d5;
      padding-bottom: 3%;
    }

    .education-heading {
      color: white;
      background: #3683cc;
      margin-top: 2%;
      padding: 1% 2%;
      font-family: 'Lato', sans-serif;
    }

    .h3-span {
      text-transform: uppercase;
      color: #3683cc;
      margin-top: 5%;
    }

    .h4-p {
      color: #767270;
    }

    .h4 {
      text-transform: capitalize;
    }

    .text-align {
      text-align: center;
    }

    .container {
      padding-bottom: 4%;
      border-bottom: 1px solid #ddd;
    }

    .contact-summary {
      font-weight: 300;
      font-size: 10pt;
      line-height: 17pt;
      word-wrap: break-word;
      overflow: hidden;
    }

    * {
      margin: 0px;
    }

    #hover-i {
      color: white;
      font-size: 60px;
    }
  `]
})
export class BluesTemplateComponent {
  @Input() resume: Resume;

  @Output() downloadTemplate = new EventEmitter<string>();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {

  }

  download() {
    if (isPlatformBrowser(this.platformId)) {

      const innerHtml = document.getElementById('html').innerHTML;
      const html = `<html>
<head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Google+Sans:400|Roboto:400,400italic,500,500italic,700,700italic|
        Roboto+Mono:400,500,700|Lato|family=Slabo+27pxMaterial+Icons">
<style type="text/css">
 .main-heading {
            font-size: 2.5em;
            color: #538ec3;
            font-family: 'Roboto', sans-serif;
            text-transform: uppercase;
          }
           .text-align {
            text-align: center;
          }
          .address-margin{
          margin-top: -3%
          }
          .email-margin{
          margin-top: -3%;
          }
          .summary{
           font-family: 'Slabo 27px', serif;
            border-bottom: 1px solid #87b0d5;
            padding-bottom: 1%;
            font-size: 0.8em;
            margin-top: 2%;
          }
           ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }
           .education-heading {
      color: white;
      background: #3683cc;
      margin-top: 2%;
      padding: 1% 1%;
      font-size: 1.5em;
    }
      .h3-span {
      text-transform: uppercase;
      color: #3683cc;
      margin-top: 5%;
    }

    .h4-p {
          color: #767270;
    }
.container {
  padding-bottom: 4%;
  border-bottom: 1px solid #ddd;
}
    .h4{
      text-transform: capitalize;
      margin-top: -3%;
    }
    .exp-span{
    margin-top: -7% !important;%;
    }
    .contact-summary{
  font-weight: 300;
  font-size: 10pt;
  line-height: 17pt;
  word-wrap: break-word;
  overflow: hidden;
}
</style>
<body>
${innerHtml}
</body>
</head>
</html>`;
      this.downloadTemplate.emit(html);
    }
  }
}
