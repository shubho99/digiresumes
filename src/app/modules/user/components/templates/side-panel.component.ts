import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resume} from '../../../core/models/resume';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';

@Component({
  selector: 'app-side-panel',
  template: `
    <div class="html page-wrap">
      <img src="../../../../assets/images/testimonial.png" alt="Photo of user" id="pic"/>
      <div id="contact-info" class="vcard">
        <!-- Microformats! -->
        <h1 class="fn">
          {{this.resume.contact_details.first_name}} {{this.resume.contact_details.last_name}}
        </h1>
        <div fxLayout="row" fxLayoutGap="20px">
          <mat-icon>call</mat-icon>
          <p style="margin-bottom: 2% !important;"><span>{{this.resume.contact_details.phone_number}}</span></p>
        </div>
        <div fxLayout="row" fxLayoutGap="20px">
          <mat-icon>email</mat-icon>
          <a class="email" href="#">{{this.resume.contact_details.email}}</a>
        </div>
        <div *ngIf="this.resume.contact_details.linkedin_url" fxLayout="row" fxLayoutGap="20px">
          <i style="font-size: 25px" class="fa fa-linkedin"></i>
          <a class="email" (click)="openLinkedInUrl()">{{this.resume.contact_details.linkedin_url}}</a>
        </div>
        <div *ngIf="this.resume.contact_details.website_url" fxLayout="row" fxLayoutGap="20px">
          <i style="font-size: 25px" class="fa fa-link"></i>
          <a class="email" (click)="openWebsiteUrl()">{{this.resume.contact_details.website_url}}</a>
        </div>
        <div fxLayout="row" fxLayoutGap="20px">
          <mat-icon style="font-size: 25px">home</mat-icon>
          <p>
            {{this.resume.contact_details.address}}, <br>
            {{this.resume.contact_details.city}}, {{this.resume.contact_details.state}} -
            {{this.resume.contact_details.zip_code}}
            <br> {{this.resume.contact_details.country}}
          </p>
        </div>
      </div>
      <div id="objective">
        <p>
          {{this.resume.contact_details.summary}}
        </p>
      </div>
      <div class="clear"></div>
      <dl>
        <dd class="clear"></dd>
        <ng-container *ngIf="this.resume.education.length">
          <dt>Education</dt>
          <dd>
            <app-education-card style="line-height: 17pt" *ngFor="let education of this.resume['education']"
                                [education]="education"></app-education-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.skills.length">
          <dt>Skills</dt>
          <dd style="margin-top: 4%">
            <ng-container *ngFor="let skill of this.resume['skills']">
              <p style="color: #767270;">{{this.skill.skill}}</p>
              <mat-progress-bar *ngIf="this.skill.level === 'intermediate'" mode="determinate" value="70"></mat-progress-bar>
              <mat-progress-bar *ngIf="this.skill.level === 'advance'" mode="determinate" value="90"></mat-progress-bar>
              <mat-progress-bar *ngIf="this.skill.level === 'basic'" mode="determinate" value="50"></mat-progress-bar>
            </ng-container>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.languages.length">
          <dt>Language</dt>
          <dd style="margin-top: 4%">
            <ng-container *ngFor="let language of this.resume['languages']">
              <p style="color: #767270;">{{language.name}}</p>
              <mat-progress-bar *ngIf="this.language.level === 'intermediate'" mode="determinate" value="70"></mat-progress-bar>
              <mat-progress-bar *ngIf="this.language.level === 'advance'" mode="determinate" value="90"></mat-progress-bar>
              <mat-progress-bar *ngIf="this.language.level === 'basic'" mode="determinate" value="50"></mat-progress-bar>
            </ng-container>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.employment_history.length">
          <dt>Experience</dt>
          <dd>
            <app-employment-history-card style="line-height: 17pt" *ngFor="let employmentHistory of this.resume['employment_history']"
                                         [employmentHistory]="employmentHistory"></app-employment-history-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.interests.length">
          <dt>Hobbies</dt>
          <dd style="margin-top: 4%;padding-left: 2.5%;">
            <app-interest-card style="line-height: 17pt" *ngFor="let interest of this.resume['interests']" [interest]="interest">
            </app-interest-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.weakness.length">
          <dt>Weakness</dt>
          <dd style="margin-top: 4%;">
            <ng-container *ngFor="let weakness of this.resume['weakness']">
              <ul style="color: #767270;list-style-type: square">
                <li>
                  {{weakness.name}}
                </li>
              </ul>
            </ng-container>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.strengths.length">
          <dt>Strength</dt>
          <dd style="margin-top: 4%;">
            <ng-container *ngFor="let strength of this.resume['strengths']">
              <ul style="color: #767270;list-style-type: square">
                <li>
                  {{strength.name}}
                </li>
              </ul>
            </ng-container>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.industrialExposures.length">
          <dt>Training And Internship</dt>
          <dd>
            <app-industrial-exposure-card style="line-height: 17pt" *ngFor="let industrialExposure of
                this.resume['industrialExposures']" [industrialExposure]="industrialExposure">
            </app-industrial-exposure-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.award_achivements.length">
          <dt>Awards And Achievement</dt>
          <dd style="margin-top: 4%;padding-left: 2.5%;">
            <app-award-card style="line-height: 17pt" *ngFor="let award of this.resume['award_achivements']"
                            [award]="award">
            </app-award-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.objectives.length">
          <dt>Objective</dt>
          <dd>
            <app-objective-card style="line-height: 17pt" *ngFor="let objective of this.resume['objectives']" [objective]="objective">
            </app-objective-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.refrences.length">
          <dt>References</dt>
          <dd>
            <app-refrence-card style="line-height: 17pt" *ngFor="let refrence of this.resume['refrences']"
                               [refrence]="refrence">
            </app-refrence-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

        <ng-container *ngIf="this.resume.projectDetails.length">
          <dt>Projects</dt>
          <dd>
            <app-project-detail-card *ngFor="let projectDetail of this.resume['projectDetails']"
                                     [projectDetail]="projectDetail">
            </app-project-detail-card>
          </dd>
          <dd class="clear"></dd>
        </ng-container>

      </dl>
      <div class="clear"></div>
      <style type="text/css">
        mat-icon {
          font-size: 25px;
        }

        .fn {
          text-transform: capitalize;
        }

        .clear {
          clear: both;
        }

        .page-wrap {
          width: 57%;
          margin: 40px auto 60px;
        }

        #pic {
          float: right;
          width: 30%;
          margin: -20px -2px 0px 0px;
        }

        h1 {
          margin: 0 0 16px 0;
          padding: 0 0 16px 0;
          font-size: 42px;
          font-weight: bold;
          letter-spacing: -2px;
          border-bottom: 1px solid #999;
        }

        h2 {
          font-size: 20px;
          margin: 0 0 6px 0;
          position: relative;
        }

        h2 span {
          position: absolute;
          bottom: 0;
          right: 0;
          font-style: italic;
          font-family: Georgia, Serif;
          font-size: 16px;
          color: #999;
          font-weight: normal;
        }

        p {
          margin: 0 0 16px 0;
        }

        a {
          color: #999;
          text-decoration: none;
          cursor: pointer;
          margin-bottom: 2%;
        }

        a:hover {
          color: black;
        }

        ul {
          margin: 0 0 32px 17px;
        }

        #objective {
          width: 500px;
          float: left;
          margin-bottom: -2%;
        }

        #objective p {
          font-family: Georgia, Serif;
          font-style: italic;
          color: #666;
        }

        dt {
          font-style: italic;
          font-weight: bold;
          font-size: 18px;
          text-align: right;
          padding: 0 26px 0 0;
          width: 150px;
          float: left;
          margin-top: 3%;
          height: 100px;
          border-right: 1px solid #999;
        }

        dd {
          width: 600px;
          float: right;
        }

        dd.clear {
          float: none;
          margin: 0;
          height: 15px;
        }

        /*@media print {*/
        /*body, html, .html {*/
        /*height: 88.5%;*/
        /*width: 97%;*/
        /*}*/
        /*.html {*/
        /*visibility: visible;*/
        /*}*/
        /**/
        /*}*/

        /*@page {*/
        /*margin-left: 10mm !important;*/
        /*margin-right: 0mm !important;*/
        /*margin-top: 10mm !important;*/
        /*margin-bottom: 0mm !important;*/
        /*size: auto !important;*/
        /*}*/
      </style>
    </div>
    <button mat-raised-button color="primary" (click)="download()">Save</button>

  `,
  styles: [`

  `]
})
export class SidePanelComponent implements OnInit, OnDestroy {
  @ViewChild('html') html: ElementRef;
  @Input() resume: Resume;
  isAlive = true;

  constructor(private router: Router, private route: ActivatedRoute,
              private resumeRepo: ResumeRepoService) {
    document.body.style.background = 'url(../../../../assets/images/noise.jpg)';
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

  download() {
    document.body.style.visibility = 'hidden';
    window.print();
    document.body.style.visibility = 'visible';
  }

  openLinkedInUrl() {
    window.open(this.resume.contact_details.linkedin_url, '_blank');
  }

  openWebsiteUrl() {
    window.open(this.resume.contact_details.website_url, '_blank');
  }
}

