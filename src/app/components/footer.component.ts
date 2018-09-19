import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color="primary" class="footer">
      <mat-toolbar-row fxLayoutAlign="center start">
        <img alt="logo" src="../../assets/images/digiresume-green.png" class="footer-logo">
      </mat-toolbar-row>
      <mat-toolbar-row class="footer__navigation">
        <ul class="footer__list" fxLayoutGap="24px">
          <li class="footer__item"><a routerLink="/" class="footer__link footer__link1">Company</a></li>
          <li class="footer__item"><a routerLink="/" class="footer__link footer__link1">Contact us</a></li>
          <li class="footer__item"><a routerLink="/" class="footer__link footer__link1">Carrers</a></li>
          <li class="footer__item"><a routerLink="/" class="footer__link footer__link1">Privacy policy</a></li>
          <li class="footer__item"><a routerLink="/" class="footer__link footer__link1">Terms</a></li>
          <span class="footer__copyright"></span>
          <li fxFlexAlign="end" class="footer__item">Copyright &copy; 2018-19 by <a routerLink="/"
                                                 class="footer__link footer__link1"> DigiResume</a></li>
        </ul>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [`
    .footer {
      background-color: #333;
      padding: 32px 0;
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
      border-top: 1px solid #777;
      padding-top: 32px;
      margin-top: 62px;
      display: inline-block;
    }

    .footer__list {
      list-style: none;
    }

    .footer__item {
      display: inline-block;
    }

    .footer__copyright {
      padding-left: 460px;
    }

    .footer__link:link, .footer__link:visited {
      color:  #fff;
      background-color: rgba(255, 255, 255, 0);
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      cursor: pointer;
      transition: all .2s;
    }

    .footer__link:hover, .footer__link:active {
      color: #5cdb95;
      background-color:  #333;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      transform: rotate(5deg) scale(1.3);
    }

  `]
})
export class FooterComponent {

}
