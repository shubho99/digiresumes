import {AfterContentInit, Component, Input} from '@angular/core';
import {Contact} from '../../../core/models/resume';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {MatDialog} from '@angular/material';
import {ShareComponent} from '../../dialogues/share.component';

@Component({
  selector: 'app-contact-detail-card',
  template: `
    <button (click)="onClick()" mat-fab class="profile-pic" [ngStyle]="{'background-image':'url('+this.url+')'}"></button>
    <h2 fxLayoutAlign="center start">
      {{contactDetails.first_name}} {{contactDetails.last_name}}
    </h2>
    <button (click)="redirectToHome()" style="margin-left: 18%;color: white" *ngIf="this.isView && !token"
            color="primary" mat-raised-button>Build
      Your Resume For free
    </button>
    <app-resume-buttons [resumeId]="this.resumeId" *ngIf="!this.isView"></app-resume-buttons>
    <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 10%">
      <mat-icon style="font-size: 25px">account_circle</mat-icon>
      <p class="contact-summary container-1">{{contactDetails.summary}}</p>
    </div>
    <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
      <mat-icon style="font-size: 25px">call</mat-icon>
      <p class="contact-summary">{{contactDetails.phone_number}}</p>
    </div>
    <div *ngIf="this.contactDetails.linkedin_url" fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
      <i style="font-size: 25px" class="fa fa-linkedin"></i>
      <p (click)="openLinkedInUrl()" style="cursor: pointer;" class="contact-summary"><u>{{contactDetails.linkedin_url}}</u></p>
    </div>
    <div *ngIf="this.contactDetails.website_url" fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
      <i style="font-size: 25px" class="fa fa-link"></i>
      <p (click)="openWebsiteUrl()" style="cursor: pointer;" class="contact-summary"><u>{{contactDetails.website_url}}</u></p>
    </div>
    <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
      <mat-icon style="font-size: 25px">email</mat-icon>
      <p class="contact-summary container-1">{{contactDetails.email}}</p>
    </div>
    <div fxLayout="row" fxLayoutGap="50px" style="color: #fff; margin-top: 5%">
      <mat-icon style="font-size: 25px">home</mat-icon>
      <p class="contact-summary container-1">
        {{contactDetails.address}}, <br>
        {{contactDetails.city}}, {{contactDetails.state}} -
        {{contactDetails.zip_code}}
        <br> {{contactDetails.country}}
      </p>
    </div>
  `,
  styles: [`

    .profile-pic {
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-bottom: 10%;
      border: 3px solid white;
      width: 75%;
      height: 215px;
      margin-left: 13%;
    }

    h2 {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 37pt;
    }

    mat-icon {
      font-size: 35px;
    }
  `]
})
export class ContactDetailCardComponent implements AfterContentInit {
  @Input() contactDetails: Contact;
  @Input() resumeId: string;
  @Input() img_url: string;
  @Input() isView = false;
  token = AuthService.getAuthToken();
  url = '';

  constructor(private router: Router, private dialog: MatDialog) {

  }

  ngAfterContentInit() {
    this.url = this.img_url ? this.img_url : '../../../../../assets/images/testimonial.png';
  }


  editProfile() {
    this.router.navigateByUrl('/user/edit/profile/' + this.resumeId);
  }

  editResume() {
    this.router.navigateByUrl('/user/edit/resume/' + this.resumeId);
  }

  redirectToHome() {
    this.router.navigate(['login']);
  }

  share() {
    const dialogRef = this.dialog.open(ShareComponent, {data: this.resumeId});
    dialogRef.updateSize('70%', '30%');
  }

  openLinkedInUrl() {
    window.open(this.contactDetails.linkedin_url, '_blank');
  }

  openWebsiteUrl() {
    window.open(this.contactDetails.website_url, '_blank');
  }

  onClick() {
    this.router.navigateByUrl('/user/edit/profile/' + this.resumeId);
  }

}
