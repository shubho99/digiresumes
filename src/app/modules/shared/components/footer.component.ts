import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DisclaimerComponent} from '../../user/dialogues/disclaimer.component';
import {PrivacyPolicyComponent} from '../../user/dialogues/privacy-policy.component';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar [class.res_home_toolbar]="this.isHomeResponsive"
                 [class.res_login_toolbar]="this.isLoginResponsive"       
                 [ngStyle]="{'margin-top': this.footerMargin ? this.footerMargin : '0%'}"
                 color="primary" class="footer res-footer">
      <mat-toolbar-row class="footer__navigation">
        <ul class="footer__list" fxLayoutGap="24px">
          <li class="footer__item"><a routerLink="/about-us" class="footer__link">About Us</a></li>
          <li class="footer__item"><a routerLink="/contact-us" class="footer__link">Contact Us</a></li>
          <li class="footer__item"><a (click)="openPrivacy()" class="footer__link">Privacy Policy</a></li>
          <li class="footer__item"><a (click)="openDisclaimer()" class="footer__link">Disclaimer</a></li>
          <span fxHide.xs class="footer__copyright">Made with 	&#10084; in India</span>
          <li fxFlexAlign="end" class="footer__item res-footer__item">Copyright &copy; 2018-19 by <a routerLink="/"
                                                                                                     class="footer__link footer__link1">
            DigiResume</a></li>
        </ul>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [`
    .footer {
      background-color: #333;
      font-size: 15px;
      font-weight: 400;
      color: #f7f7f7;
    }

    .footer-logo {
      height: 100px;
      transition: height 1s;
    }

    .footer-logo:hover {
      height: 110px;
    }

    .footer__navigation {
      display: inline-block;
    }

    .footer__list {
      list-style: none;
      padding-top: 1.3%;
    }

    .footer__item {
      display: inline-block;
    }

    .footer__copyright {
      padding-left: 160px;
      text-transform: uppercase;
      margin-right: 15% !important;
    }

    .footer__link {
      text-transform: uppercase;
      text-decoration: none;
    }

    .footer__link:hover, .footer__link:visited {
      color: #fff;
      background-color: rgba(255, 255, 255, 0);
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      cursor: pointer;
      transition: all .2s;
    }

    .footer__link:hover, .footer__link:active {
      color: #5cdb95;
      background-color: #333;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      transform: rotate(5deg) scale(1.3);
    }

  `]
})
export class FooterComponent {
  @Input() footerMargin: string;
  @Input() isHomeResponsive  = false;
  @Input() isLoginResponsive  = false;

  constructor(private  matDialog: MatDialog) {

  }

  openPrivacy() {
    const dialog = this.matDialog.open(PrivacyPolicyComponent);
    dialog.updateSize('90%', '90%');
  }

  openDisclaimer() {
    const dialog = this.matDialog.open(DisclaimerComponent);
    dialog.updateSize('90%', '90%');
  }
}
