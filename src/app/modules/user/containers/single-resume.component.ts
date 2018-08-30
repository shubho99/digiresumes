import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';

@Component({
  selector: 'app-single-resume',
  template: `
    <div fxLayout="row">
      <mat-card class="side-bar-card">
        <div fxLayout="column" fxLayoutGap="30px">
          <img style="width: 100%" src="../../../../../assets/images/testimonial.png"/>
          <h2 fxLayoutAlign="center start">
            {{this.resume.contact_details.first_name}} {{this.resume.contact_details.last_name}}
          </h2>
          <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="center start">
            <button mat-mini-fab>
              <mat-icon (click)="editResume()" style="font-size: 25px" matTooltip="edit-resume">assignment</mat-icon>
            </button>
            <button mat-mini-fab>
              <mat-icon (click)="editProfile()" style="font-size: 25px" matTooltip="edit-profile video or picture">
                videocam
              </mat-icon>
            </button>
            <button mat-mini-fab>
              <mat-icon style="font-size: 25px" matTooltip="share">share</mat-icon>
            </button>
          </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 10%">
              <mat-icon style="font-size: 25px">account_circle</mat-icon>
              <p class="contact-summary container-1">{{this.resume.contact_details.summary}}</p>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">call</mat-icon>
              <p class="contact-summary">{{this.resume.contact_details.phone_number}}</p>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">email</mat-icon>
              <p class="contact-summary container-1">{{this.resume.contact_details.email}}</p>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">home</mat-icon>
              <p class="contact-summary container-1">
                {{this.resume.contact_details.address}}, <br>
                {{this.resume.contact_details.city}}, {{this.resume.contact_details.state}} -
                {{this.resume.contact_details.zip_code}}
                <br> {{this.resume.contact_details.country}}
              </p>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">calendar_today</mat-icon>
              <div fxFlex="column" class="container-1">
                <div *ngFor="let skills of this.resume['skills']">
                  <h4 style="color: #fff; margin-bottom: 5%">Professional skills</h4>
                  <p class="contact-summary">{{skills.skill}}</p>
                  <mat-progress-bar mode="determinate" value="70"></mat-progress-bar>
                </div>
              </div>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">calendar_today</mat-icon>
              <div fxFlex="column" class="container-1">
                <div *ngFor="let languages of this.resume['languages']">
                  <h4 style="color: #fff; margin-bottom: 5%">Languages</h4>
                  <p class="contact-summary">{{languages.name}}</p>
                  <mat-progress-bar mode="determinate" value="70"></mat-progress-bar>
                </div>
              </div>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">favorite</mat-icon>
              <div fxFlex="column" class="container-1">
                <h4 style="color: #fff; margin-bottom: 5%">Strengths</h4>
                <div *ngFor="let strengths of this.resume['strengths']">                 
                  <ul style="color: #fff;">
                    <li>
                      {{strengths.name}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
              <mat-icon style="font-size: 25px">broken_image</mat-icon>
              <div fxFlex="column" class="container-1">
                <h4 style="color: #fff; margin-bottom: 5%">Weakness</h4>
                <div *ngFor="let weakness of this.resume['weakness']">                  
                  <ul style="color: #fff;">
                    <li>
                      {{weakness.name}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </mat-card>
      <div fxLayout="column">
        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>Education</p>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt" *ngFor="let education of this.resume['education']">
                  <h3>{{education.degree_type}}
                    <span style="text-transform: lowercase !important; font-size: 10pt;">@{{education.school_name}}</span></h3>
                  <span style="color: #5da4d9">{{education.graduation_month}} {{education.graduation_year}}</span>
                  <h4 class="container">
                    {{education.city}}, {{education.state}} <br>
                    {{education.field}} - {{education.percentage}}
                  </h4>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>Experience</p>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt" *ngFor="let employmentHistory of this.resume['employment_history']">
                  <h3>{{employmentHistory.designation}}
                    <span style="text-transform: lowercase !important; font-size: 10pt;">
                  @{{employmentHistory.organisation}}
                  </span>
                  </h3>
                  <span style="color: #5da4d9" *ngIf="employmentHistory.end_month">
                    {{employmentHistory.start_month}} {{employmentHistory.start_year}} - 
                    {{employmentHistory.end_month}} {{employmentHistory.end_year}}
                  </span>
                  <span style="color: #5da4d9" *ngIf="!employmentHistory.end_month">
                    {{employmentHistory.start_month}} {{employmentHistory.start_year}}
                  </span>
                  <h4 class="container">
                    {{employmentHistory.city}}, {{employmentHistory.state}} <br>
                    {{employmentHistory.employer}}
                  </h4>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>Hobbies and interest</p>
            </div>
          </mat-card-header>
          <mat-card-content style="margin: 5%;">
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt;" *ngFor="let interests of this.resume['interests']">
                  <ul>
                    <li>
                      {{interests.interest}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>industrial exposure</p>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt" *ngFor="let industrialExposures of this.resume['industrialExposures']">
                  <h3>{{industrialExposures.organisation}}</h3>
                  <span style="color: #5da4d9" *ngIf="industrialExposures.end_month">
                    {{industrialExposures.start_month}} {{industrialExposures.start_year}} - 
                    {{industrialExposures.end_month}} {{industrialExposures.end_year}}
                  </span>
                  <span style="color: #5da4d9" *ngIf="!industrialExposures.end_month">
                    {{industrialExposures.start_month}} {{industrialExposures.start_year}}
                  </span>
                  <h4>
                    {{industrialExposures.city}}, {{industrialExposures.state}}
                  </h4>
                  <p class="container">{{industrialExposures.work}}</p>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>awards and achievement</p>
            </div>
          </mat-card-header>
          <mat-card-content style="margin: 5%;">
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt;" *ngFor="let award_achivements of this.resume['award_achivements']">
                  <ul>
                    <li>
                      {{award_achivements.awards_and_achivements}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>objective</p>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt" *ngFor="let objectives of this.resume['objectives']">
                  <h3>
                    {{objectives.objective}}<br>
                    {{objectives.date}}<br>
                    {{objectives.place}}
                  </h3>
                  <p>{{objectives.declaration}}</p>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>reference</p>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt" *ngFor="let refrences of this.resume['refrences']">
                  <h3>
                    {{refrences.name}}<br>
                    {{refrences.relationship}}<br>
                    {{refrences.company}}<br>
                    {{refrences.email}}<br>
                    {{refrences.phone}}<br>
                    {{refrences.address}}
                  </h3>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <p>project details</p>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div fxFlex="column">
                <div style="line-height: 20pt" *ngFor="let projectDetails of this.resume['projectDetails']">
                  <h3>
                    {{projectDetails.title}}<br>
                    {{projectDetails.description}}<br>
                    {{projectDetails.duration}}<br>
                    {{projectDetails.role}}
                  </h3>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    .contact-summary {
      color: #fff;
      font-weight: 300;
      font-size: 10pt;
      line-height: 17pt;
    }

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
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      width: 30%;
      margin-left: 15%;
    }

    mat-card {
      background: #eaf1f8;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      width: 80%;
      margin-left: 2.5%;
      margin-top: 35px;
    }

    mat-icon {
      padding-top: 1.3%;
      font-size: 35px;
    }

    .username {
      color: #767270;
      font-size: 35px;
      text-transform: uppercase;
    }

    .education-card {
      margin-left: 15%;
    }

    .container {
      padding-bottom: 4%;
      border-bottom: 1px solid #767270;
    }

    .container-1 {
      padding-bottom: 10%;
      border-bottom: 1px solid #fff;
      margin-bottom: 15%;
    }
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
    }).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
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
