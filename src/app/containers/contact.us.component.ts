import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  template: `
    <div>
      <div>
        <img style="width: 106%; height: 100%" src="../../assets/images/contact-us.jpeg"/>
      </div>
      <h1>Contact Us</h1>
      <p class="company-text mac-contact-us-p">Our Company is here to provide you more information,answer any questions you may have <br>
        and create an effective solution for your need</p>
      <mat-icon class="animated fadeInDown infinite time mac-contact-us-icon" (click)=scrollToBottom()>arrow_drop_down_circle</mat-icon>
    </div>
    <div class="u-margin-bottom-small-1"></div>
    <div class="book mac-contact-us-card">
      <div class="book__form">
        <form class="form" (submit)="onSend()" [formGroup]="contactUsForm">
          <div class="u-margin-bottom-small">
            <h2 class="heading-secondary" style="margin-left: 50px; font-size: 2rem; text-align: center; margin-top: 1%">
              We'd love To Hear <br> From You!
            </h2>
          </div>
          <div class="blog">
            <p class="hire">Need help? Want to hire me as a freelancer for your work?<br>Feel free to contact
              me and I would be happy to help!</p>
            <span class="account">Email: <a class="footer__link" routerLink="#"> shubham99varshney@gmail.com</a></span>
          </div>

          <div class="example-container" fxLayout="column" fxLayoutGap="15px">
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
            </mat-form-field>

            <mat-card-actions>
              <button mat-raised-button color="accent">SEND</button>
            </mat-card-actions>
          </div>
        </form>
      </div>
    </div>

  `,
  styles: [`
    h1 {
      position: absolute;
      top: 35%;
      left: 42%;
      font-size: 3em;
      font-weight: 100;
      text-shadow: 0 0 30px rgba(0, 0, 0, .25);
      background-image: linear-gradient(to right bottom, #e79f13, #ff6803);
      -webkit-background-clip: text;
      color: transparent;
    }

    .company-text {
      bottom: 38%;
      position: absolute;
      align-items: center;
      text-align: justify;
      margin-left: 17%;
      color: #ff5501;
      font-size: 1.5em;
      text-shadow: 0 0 30px rgba(0, 0, 0, .5);
      text-align: center;
    }

    .hire {
      font-size: 17px;
      margin-left: 6px;
      color: #757575;
      margin-top: 5px;
    }

    mat-icon {
      color: white;
      opacity: 0.8;
      font-size: 3.5em;
      position: absolute;
      bottom: 18%;
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
      background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
      url(../../assets/images/contact.jpg);
      background-size: cover;
      border-radius: 3px;
      box-shadow: 1px 1px 20px 15px rgba(0, 0, 0, 0.2);
      width: 900px;
      margin-left: 220px;
      margin-top: -1%;
      height: 81%;
    }

    .u-margin-bottom-small {
      margin-bottom: 0.6rem;
    }

    .heading-secondary {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 700;
      display: inline-block;
      background-image: linear-gradient(to right, #e79f13, #ff6803);
      -webkit-background-clip: text;
      color: transparent;
      letter-spacing: .2rem;
      transition: all .2s;
    }

    .heading-secondary:hover {
      transform: skewY(2deg) skewX(15deg) scale(1.1);
      text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
    }

    .blog {
      margin-left: 30px;
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
      margin-left: 35px;

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
  `]
})
export class ContactUsComponent {
  fullNameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageControl = new FormControl('');
  contactUsForm: FormGroup;

  constructor() {
    this.contactUsForm = new FormGroup({
      myFullname: this.fullNameControl,
      myEmail: this.emailControl,
      myMessage: this.messageControl
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


  onSend() {
    console.log('form submitted', this.fullNameControl.value, this.emailControl.value, this.messageControl);
    this.contactUsForm.reset();
  }

  scrollToBottom() {
    window.scrollTo({left: 0, top: 1000, behavior: 'smooth'});
  }
}

