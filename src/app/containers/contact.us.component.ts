import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';
import {AlertService} from '../modules/core/services/alert.service';

@Component({
  selector: 'app-contact-us',
  template: `
    <div class="contact res-contact">
      <!--<div>-->
      <!--<img style="width: 106%; height: 100%" src="../../assets/images/contact-us.jpg"/>-->
      <!--</div>-->
      <div>
        <h1 class="res-contact-h1 contact-h1" animateOnScroll >Contact Us</h1>
        <p class="company-text mac-contact-us-p res-contact-company-text" >Our Company is
          here to provide you more information,answer any questions you may have <br>
          and create an effective solution for your need</p>
      </div>
      <div>
        <mat-icon style="font-size: 3.5rem;" class="animated fadeInDown infinite time mac-contact-us-icon res-contact-mat-icon"
                  (click)=scrollToBottom()>arrow_drop_down_circle
        </mat-icon>
      </div>
    </div>
    <div class="u-margin-bottom-small-1"></div>
    <div class="book mac-contact-us-card res-contact-book">
      <div class="book__form"  style="animation-delay: .4s">
        <form class="form mac-contact-form res-contact-form" (submit)=" contactUsForm.valid &&  onSend()" [formGroup]="contactUsForm">
          <div class="u-margin-bottom-small res-contact-bottom-margin">
            <h2 class="heading-secondary res-contact-heading-secondary">
              We'd love To Hear <br> From You!
            </h2>
          </div>
          <div class="blog res-contact-blog">
            <p class="hire res-contact-hire">Need help? Want to ask something?<br>Feel free to contact
              Us and Our Team would be happy to help!</p>
            <span class="account res-contact-account">Email: <a class="footer__link" routerLink="#"> shagungarg2010@gmail.com</a></span>
          </div>

          <div class="example-container res-contact-example-container" fxLayout="column" fxLayoutGap="15px">
            <mat-form-field color="accent">
              <input matInput placeholder="Full Name" [formControl]="fullNameControl">
              <mat-error *ngIf="fullNameControl.invalid">{{getErrorMessageFullName()}}</mat-error>
            </mat-form-field>

            <mat-form-field color="accent">
              <input matInput placeholder="Email" [formControl]="emailControl">
              <mat-error *ngIf="emailControl.invalid">{{getErrorMessageEmail()}}</mat-error>
            </mat-form-field>

            <mat-form-field color="accent">
              <textarea matInput placeholder="Message" [formControl]="messageControl"></textarea>
              <mat-error *ngIf="messageControl.invalid">{{getErrorMessageMessage()}}</mat-error>
            </mat-form-field>

            <mat-card-actions>
              <button class="res-contact-button" mat-raised-button color="accent">SEND</button>
            </mat-card-actions>
          </div>
        </form>
      </div>
      <ngx-loading [show]="loading"></ngx-loading>
    </div>
  `,
  styles: [`
    .form {
      margin-left: 5%;
      padding-top: 3%;
    }

    .contact {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(105deg, rgba(225, 204, 174, 0.8) 0%, rgba(225, 204, 174, 0.8) 45%, transparent 45%),
      url(../../assets/images/contact-us.jpg);
      background-size: 100% 110%;
      background-attachment: fixed;
      background-position: center;
    }

    .contact-h1 {
      position: absolute;
      top: 30%;
      left: 12%;
      font-size: 48px;
      font-weight: bold;
      letter-spacing: 1.5px;
      /*background-image: linear-gradient(to right bottom, #e79f13, #ff6803);*/
      /*-webkit-background-clip: text;*/
      /*color: transparent;*/
      color: #ffab00;
      text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.75);
    }

    .company-text {
      top: 48%;
      left: -8%;
      width: 30%;
      position: absolute;
      margin-left: 14.5%;
      color: #757575;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 1.5px;
      /*text-shadow: 0 0 30px rgba(0, 0, 0, .5);*/
      text-align: center;
    }

    .hire {
      font-size: 16px;
      font-weight: bold;
      margin-left: 6px;
      color: #757575;
      margin-top: 5px;
    }

    mat-icon {
      color: #e1ccae;
      opacity: 0.8;
      position: absolute;
      bottom: 8%;
      left: 47%;
      cursor: pointer;
    }

    mat-icon:hover {
      opacity: 1;
      transition: all 1s;
    }

    .mat-card-actions .mat-button:first-child, .mat-card-actions .mat-raised-button:first-child {
      margin-left: 100px;
      margin-bottom: 20px;
    }

    .u-margin-bottom-small-1 {
      margin-bottom: 1.5rem;
    }

    .book {
      background-image: linear-gradient(105deg, rgba(225, 204, 174, 0.8) 0%, rgba(225, 204, 174, 0.8) 45%, transparent 45%),
      url(../../assets/images/contact.jpg);
      background-size: 100% 100%;

      border-radius: 3px;
      box-shadow: 1px 1px 20px 15px rgba(0, 0, 0, 0.2);
      background-attachment: fixed;
      background-position: center;
      width: 100%;
      margin-left: 0px;
      margin-top: -1.8%;
      height: 102%;
    }

    .u-margin-bottom-small {
      margin-bottom: 3%;
    }

    .heading-secondary {
      font-size: 37px;
      text-transform: uppercase;
      display: inline-block;
      /*background-image: linear-gradient(to right, #e79f13, #ff6803);*/
      /*-webkit-background-clip: text;*/
      /*color: transparent;*/
      margin-left: 20px;
      text-align: center;
      margin-top: -0.5%;
      font-weight: bold;
      letter-spacing: 1.5px;
      color: #ffab00;
      text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.75);
      transition: all .2s;
    }

    /*.heading-secondary:hover {*/
    /*transform: skewY(2deg) skewX(15deg) scale(1.1);*/
    /*text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);*/
    /*}*/

    .blog {
      margin-bottom: 30px;
      display: block;
      background-color: #F9F9F9;
      width: 410px;
      padding: 4px 4px;
      border-radius: 4px;
      box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.2);

    }

    .account {
      color: #757575;
      margin-left: 5%;
      font-weight: bold;
    }

    .example-container {
      margin-left: 50px;
    }

    .example-container > * {
      width: 300px;
    }

    .footer__link:link, .footer__link:visited {
      color: #ff6803;
      background-color: rgba(255, 255, 255, 0);
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      cursor: pointer;
      transition: all .2s;
    }

    .footer__link:hover, .footer__link:active {
      color: #fff;
      background-color: #e79f13;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      transform: rotate(5deg) scale(1.3);
    }

    .time {
      animation-duration: 2s;
    }
  `],
})
export class ContactUsComponent {
  fullNameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageControl = new FormControl('', [Validators.required]);
  contactUsForm: FormGroup;
  loading = false;

  constructor(private authRepo: AuthRepoService, private alertService: AlertService) {
    document.body.style.overflowX = 'visible';
    this.contactUsForm = new FormGroup({
      name: this.fullNameControl,
      email: this.emailControl,
      message: this.messageControl
    });
  }

  getErrorMessageFullName() {
    return this.fullNameControl.hasError('required') ? 'Fullname is required' : '';
  }

  getErrorMessageEmail() {
    return this.emailControl.hasError('required') ? 'Email is required' :
      this.emailControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageMessage() {
    return this.messageControl.hasError('required') ? 'Message is required' : '';
  }

  onSend() {
    this.loading = true;
    this.authRepo.contactUs(this.contactUsForm.value).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Your query has been submitted successfully');
    }, (error => {
      this.loading = false;
      this.alertService.error('Something went wrong please try again');
    }));
  }

  scrollToBottom() {
    if (window.innerWidth <= 599) {
      window.scrollTo({left: 0, top: 700, behavior: 'smooth'});
    } else {
      window.scrollTo({left: 0, top: 1000, behavior: 'smooth'});

    }
  }
}

