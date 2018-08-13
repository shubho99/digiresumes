import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <img class="polygon res-polygon" src="../../assets/images/buisness.jpg">
    <div class="main-div res-main-div" fxLayout="column"
         fxLayoutAlign="center start">
      <p class="animated flipInY time resume res-resume">
        Make My <span style="color: #ff7d04">Resume</span>
      </p>
      <div class="animated flipInX time1 resume-sub res-resume-text" fxLayout="row" fxLayoutAlign="start center">
        <p style="font-size:34px;color:  #ffdab4" class="res-resume-sub">
          Let's make your Resume &nbsp;
        </p>
        <p style="font-size:40px;border: solid thick #1665c1;" id="spin" class="res-resume-sub-anm" color="primary">
        </p>
      </div>
    </div>
    <div class="animated fadeIn time">
      <button (click)="onClick()" class="animated slideInUp time button home-res-button" mat-button>Get
        Started
      </button>
    </div>
  `,
  styles: [`
    #spin {
      color: #8bc3f6;
    }

    #spin:after {
      content: "Classy";
      animation: spin 8s linear infinite;
    }

    .resume {
      margin-left: 4.5%;
      margin-bottom: 9px;
      margin-top: -1%;
      font-size: 70px;
      color: #ffdab4;
      letter-spacing: 11px;
      text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.75);
    }

    .resume-sub {
      padding-top: 10px;
      margin-left: 12%;
      margin-bottom: 3px;
      margin-top: -2%;
      text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.75);
    }

    @keyframes spin {
      0% {
        content: "Perfect";
         
      }
      20% {
        content: "Digital";
         
      }
      30% {
        content: "Stylish";
         
      }
      40% {
        content: "Professional";
         
      }
      50% {
        content: "Readable";
         
      }
      60% {
        content: "Beautiful";
      }
      70% {
        content: "Attractive";
      }
      80% {
        content: "Amazing";
      }
      90% {
        content: "Lovely";
      }
    }

    .main-div {
      width: 56%;
      height: 26%;
      margin-top: 5%;
      position: relative;
      margin-left: 26%;
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3);
      display: block;
      border-radius: 10px;
    }

  

    .button {
      padding-top: .5%;
      padding-bottom: .5%;
      margin-top: 5%;
      margin-left: 47%;
      font-weight: bold;
      letter-spacing: 1.5px;
      border-radius: 30px;
      font-size: 1.1em;
      text-transform: uppercase;
      background-image: linear-gradient(to right bottom, #ffdab4, #ff6803);
      color: brown;
      /*text-shadow: 0px 2px .1px rgba(0, 0, 0, 0.75);*/
      width: 16%;
      height: 8%;
      transition: all .5s;
    }

    .button:hover {
      transform: translateY(-3px);
      /*box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3);*/
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3);
    }
  `]
})

export class HomeComponent {
  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigate(['get-started']);
  }
}

// #1665c1
