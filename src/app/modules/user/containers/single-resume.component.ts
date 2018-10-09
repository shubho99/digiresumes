import {filter, take, map} from 'rxjs/operators';
import {AfterContentInit, AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {AuthService} from '../../core/services/auth.service';
import {Observable} from 'rxjs';
import {switchMap, takeWhile} from 'rxjs/internal/operators';
import {Utils} from '../../core/utils/utils';
import {isPlatformBrowser} from '@angular/common';
import {RootState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {LogoutAction} from '../../../actions/user';

@Component({
  selector: 'app-single-resume',
  template: `
    <div style="margin-top: 1%"
         *ngIf="!this.resume.contact_details &&  (this.resume.skills.length || 
 this.resume.weakness.length || this.resume.strengths.length ||
 this.resume.education.length || this.resume.employment_history.length || this.resume.refrences.length ||
this.resume.award_achivements.length || this.resume.interests.length || this.resume.industrialExposures.length
|| this.resume.projectDetails.length  || this.resume.objectives.length) && !this.isView">
      <app-resume-buttons [resumeId]="this.resume._id"></app-resume-buttons>
      <button style="        margin-top: 3.4%;
    margin-left: 36%;
    display: block;" fxHide.xs matTooltip="Views:{{this.resume.views}}" mat-mini-fab class="views-span res-views-span"
              *ngIf="this.resume && !this.isView">
        <mat-icon style="font-size: 25px" aria-hidden="true">
          remove_red_eye
        </mat-icon>
      </button>
    </div>
    <div class="alternate instaFade" fxLayout="row" fxLayout.xs="column" *ngIf="this.resume">
      <mat-card *ngIf="this.resume.contact_details || this.resume.skills.length || 
 this.resume.weakness.length || this.resume.languages.length || this.resume.strengths.length"
                class="side-bar-card res-side-bar-card">
        <div fxLayout="column" fxLayoutGap="30px">
          <button fxHide.xs matTooltip="Views:{{this.resume.views}}" mat-mini-fab class="views-span res-views-span"
                  *ngIf="this.resume && !this.isView && this.resume.contact_details ">
            <mat-icon style="font-size: 25px" aria-hidden="true">
              remove_red_eye
            </mat-icon>
          </button>
          <span *ngIf="this.resume && !this.isView" fxHide.gt-xs class="res-resume-views">
            Views:{{this.resume.views}}</span>
          <app-contact-detail-card *ngIf="this.resume.contact_details" [resumeId]="this.resume._id"
                                   [isView]="this.isView" [contactDetails]="this.resume.contact_details" [img_url]="this.resume.image_url">
          </app-contact-detail-card>
          <ng-container *ngTemplateOutlet="skillTemplate"></ng-container>
          <ng-container *ngTemplateOutlet="languageTemplate"></ng-container>
          <ng-container *ngTemplateOutlet="strengthTemplate"></ng-container>
          <ng-container *ngTemplateOutlet="weaknessTemplate"></ng-container>
        </div>
      </mat-card>

      <div class="res-single-resume-card" fxLayout="column" fxLayoutAlign.xs="start" style="width: 100%; margin-bottom: 2%">
        <iframe *ngIf="this.resume.video_url" width="100%" height="100%" frameborder="0" allowfullscreen="true"
                [src]="this.resume.video_url | safeUrl"></iframe>
        <ng-container *ngTemplateOutlet="educationTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="employmentHistory"></ng-container>
        <ng-container *ngTemplateOutlet="interestTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="industrialExposureTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="awardTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="objectiveTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="refrenceTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="projectDetailTemplate"></ng-container>
      </div>
    </div>
    <ng-container *ngTemplateOutlet="buttonsTemplate"></ng-container>
    <ngx-loading [show]="loading"></ngx-loading>
    <ng-template #skillTemplate>
      <div *ngIf="this.resume.skills.length" fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
        <mat-icon style="font-size: 25px">calendar_today</mat-icon>
        <div fxFlex="column" class="container-1">
          <h4 style="color: #fff; margin-bottom: 5%">Professional skills</h4>
          <app-skill-card *ngFor="let skill of this.resume['skills']" [skill]="skill"></app-skill-card>
        </div>
      </div>
    </ng-template>

    <ng-template #languageTemplate>
      <div *ngIf="this.resume.languages.length" fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
        <i class="fa fa-bullhorn" style="font-size: 25px; color: #fff"></i>
        <div fxFlex="column" class="container-1">
          <h4 style="color: #fff; margin-bottom: 5%">Languages</h4>
          <app-language-card *ngFor="let language of this.resume['languages']" [language]="language">
          </app-language-card>
        </div>
      </div>
    </ng-template>

    <ng-template #strengthTemplate>
      <div *ngIf="this.resume.strengths.length" fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
        <mat-icon style="font-size: 25px">favorite</mat-icon>
        <div fxFlex="column" class="container-1">
          <h4 style="color: #fff; margin-bottom: 5%">Strengths</h4>
          <app-strength-card *ngFor="let strength of this.resume['strengths']" [strength]="strength">
          </app-strength-card>
        </div>
      </div>
    </ng-template>

    <ng-template #weaknessTemplate>
      <div *ngIf="this.resume.weakness.length" fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
        <mat-icon style="font-size: 25px">broken_image</mat-icon>
        <div fxFlex="column" class="container-1">
          <h4 style="color: #fff; margin-bottom: 5%">Weakness</h4>
          <app-weakness-card *ngFor="let weakness of this.resume['weakness']" [weakness]="weakness"></app-weakness-card>
        </div>
      </div>
    </ng-template>

    <ng-template #educationTemplate>
      <mat-card *ngIf="this.resume.education.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-graduation-cap" style="font-size: 35px"></i>
            <p>Education</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-education-card style="line-height: 17pt" *ngFor="let education of this.resume['education']"
                                  [education]="education"></app-education-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #employmentHistory>
      <mat-card *ngIf="this.resume.employment_history.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-briefcase" style="font-size: 35px"></i>
            <p>Experience</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-employment-history-card style="line-height: 17pt" *ngFor="let employmentHistory of this.resume['employment_history']"
                                           [employmentHistory]="employmentHistory"></app-employment-history-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #interestTemplate>
      <mat-card *ngIf="this.resume.interests.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-plane fa-rotate-270 res-icon-interest" style="font-size: 35px"></i>
            <p>Hobbies and interest</p>
          </div>
        </mat-card-header>
        <mat-card-content style="margin: 5%;">
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-interest-card style="line-height: 17pt" *ngFor="let interest of this.resume['interests']" [interest]="interest">
              </app-interest-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #industrialExposureTemplate>
      <mat-card *ngIf="this.resume.industrialExposures.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-industry" style="font-size: 35px"></i>
            <p>industrial exposure</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-industrial-exposure-card style="line-height: 17pt" *ngFor="let industrialExposure of
                this.resume['industrialExposures']" [industrialExposure]="industrialExposure">
              </app-industrial-exposure-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #awardTemplate>
      <mat-card *ngIf="this.resume.award_achivements.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-trophy res-icon-award" aria-hidden="true" style="font-size: 35px"></i>
            <p>awards and achievement</p>
          </div>
        </mat-card-header>
        <mat-card-content style="margin: 5%;">
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-award-card style="line-height: 17pt" *ngFor="let award of this.resume['award_achivements']"
                              [award]="award">
              </app-award-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #objectiveTemplate>
      <mat-card *ngIf="this.resume.objectives.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-lightbulb-o" aria-hidden="true" style="font-size: 35px"></i>
            <p>objective</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-objective-card style="line-height: 17pt" *ngFor="let objective of this.resume['objectives']" [objective]="objective">
              </app-objective-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #refrenceTemplate>
      <mat-card *ngIf="this.resume.refrences.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-users" style="font-size: 35px"></i>
            <p>reference</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-refrence-card style="line-height: 17pt" *ngFor="let refrence of this.resume['refrences']"
                                 [refrence]="refrence">
              </app-refrence-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #projectDetailTemplate>
      <mat-card *ngIf="this.resume.projectDetails.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutGap="50px" class="contact-username">
            <i class="fa fa-newspaper-o" style="font-size: 35px"></i>
            <p>project details</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" class="education-card res-education-card" fxLayoutGap="20px">
            <div fxFlex="column">
              <app-project-detail-card *ngFor="let projectDetail of this.resume['projectDetails']"
                                       [projectDetail]="projectDetail">
              </app-project-detail-card>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #buttonsTemplate>
      <div *ngIf="!this.resume.contact_details && !this.resume.skills.length && 
 !this.resume.weakness.length && !this.resume.strengths.length &&
 !this.resume.education.length && !this.resume.employment_history.length && !this.resume.refrences.length &&
!this.resume.award_achivements.length && !this.resume.interests.length && !this.resume.industrialExposures.length
&& !this.resume.projectDetails.length && !this.resume.objectives.length "
           fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="30px">
        <p style="margin-top: 4%">Please fill some details to see your Resume</p>
        <app-resume-buttons [resumeId]="this.resume._id"></app-resume-buttons>
      </div>
    </ng-template>

  `,
  styles: [`


    h3, span {
      text-transform: uppercase;
      color: #767270;
      margin-top: 5%;
    }

    h4, p {
      color: #767270;
    }

    h2 {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 37pt;
    }

    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }

    .side-bar-card {
      background: #538EC3;
      /*box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);*/
      width: 325px;
      margin-left: 12%;
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3) !important;
      margin-bottom: 2%;
    }

    mat-card {
      background: #eaf1f8;
      width: 80%;
      margin-left: 2.5%;
      margin-top: 35px;
    / / box-shadow: 1 px 1 px 8 px 8 px rgba(0, 0, 0, 0.2) !important;
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3) !important;

    }

    .views-span {
      position: absolute;
      left: 62px;
      top: 44px;
      color: black;
      color: black !important;
      background: #f1c232 !important;
      z-index: 2;
    }

    iframe {
      width: 81%;
      height: 360px;
      margin-top: 36px;
      margin-left: 2%;
    }

    mat-icon {
      padding-top: 1.3%;
      font-size: 35px;
    }

    .education-card {
      margin-left: 17.5%;
    }

    p, i {
      color: #a85f46;
    }

    .views {
      margin-top: 26%;
      margin-left: 12%;
    }
  `]
})
export class SingleResumeComponent implements OnInit, OnDestroy, AfterViewInit {
  resume: Resume = null;
  isAlive = true;
  loading = false;
  isView = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private resumeRepo: ResumeRepoService, @Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.backgroundImage = 'url("../../../../assets/images/back.jpg")';
    }
  }

  ngOnInit() {

    const param = this.router.url.split('/')[2];
    this.isView = param === 'view' ? true : false;
    this.loading = true;
    this.route.params.pipe(map(params => params['id']), switchMap((id) => {
      if (this.isView) {
        return this.resumeRepo.getResume(id, true);
      }
      return this.resumeRepo.getResume(id);
    })).pipe(filter(res => !!res)).pipe(takeWhile(() => this.isAlive)).subscribe((res) => {
      this.loading = false;
      this.resume = res;
    }, (err) => {
      this.loading = false;
    });
  }


  ngOnDestroy() {
    this.isAlive = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.backgroundImage = '';
    }
  }

  ngAfterViewInit() {
    if (this.isView) {
      this.update();
    }
  }

  update() {
    this.resumeRepo.updateViews({views: ++this.resume.views}, this.resume._id).pipe(take(1)).subscribe((res) => {
    });
  }
}
