import {Component} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
    <div>
      <img style="width: 106%; height: 100%" src="../../assets/images/contact-us.jpeg"/>
      <h1>Contact Us</h1>
      <p>Our Company is here to provide you more information,answer any questions you may have <br> and create an effective
        solution for your need</p>
      <mat-icon (click)=scrollToBottom()>arrow_drop_down_circle</mat-icon>
    </div>
    <mat-card style="opacity: 0.7">
      <mat-card class="contact-card">
        <mat-card-header>
          Contact Us
        </mat-card-header>
        <mat-card-content fxLayout="column">
          <div>
            <mat-form-field style="margin-top: 8%;">
              <input matInput placeholder="Email">
            </mat-form-field>
          </div>
          <div>
            <mat-form-field style="margin-top: 8%;">
              <input matInput placeholder="Name">
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>
    </mat-card>
  `,
  styles: [`
    h1 {
      position: absolute;
      top: 35%;
      left: 42%;
      font-size: 3em;
      color: #fff;
      font-weight: 100;
      text-shadow: 0 0 30px rgba(0, 0, 0, .25);
    }

    p {
      bottom: 38%;
      position: absolute;
      align-items: center;
      text-align: justify;
      margin-left: 17%;
      color: #fff;
      font-size: 1.5em;
      text-shadow: 0 0 30px rgba(0, 0, 0, .5);
      text-align: center;
    }

    mat-icon {
      color: white;
      opacity: 0.8;
      font-size: 3.5em;
      position: absolute;
      bottom: 29%;
      left: 48%;
    }

    mat-card {
      height: 100%;
      width: 102.3%;
      margin-top: -3px;
    }

    .contact-card {
      width: 50%;
      height: 90%;
      margin-left: 17%;
      margin-top: 3%;
    }

    mat-icon:hover {
      opacity: 1;
      transition: all 1s;
    }

    mat-card-header {
      margin-left: 26%;
      font-size: 2.5em;
      color: #ff8505;
      letter-spacing: 11px;
    }

    mat-form-field {
      width: 40%;
    }
  `]
})
export class ContactUsComponent {
  constructor() {
  }

  scrollToBottom() {
    window.scrollTo({left: 0, top: 1000, behavior: 'smooth'});
  }
}

