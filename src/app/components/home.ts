import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <img class="polygon" src="../../assets/images/buisness.jpg" style="position: absolute;height:93%;width: 106%;margin-top: -2%">
    <div class="main-div" fxLayout="column"
         fxLayoutAlign="center start">
      <p class="animated flip time" style="    margin-left: 4%;
    margin-bottom: -34px;
    margin-top: 1%;
    font-size: 70px;
    color: #ffdab4; letter-spacing: 11px">
        Make My <span style="font-size: 70px;color: #ff7d04">Resume</span>
      </p>
      <div class="animated flipInX time1" style="  padding-left: 10px; padding-top : 10px; margin-left: 4%;
    margin-top: 1%;" fxLayout="row" fxLayoutAlign="start center">
        <p style="margin-left: 40px;font-size:34px;color:  #ffdab4">
          Let's make your Resume &nbsp;
        </p>
        <p style="font-size:40px;    border: solid thick #1665c1;" id="spin" color="primary">
        </p>
      </div>
    </div>
    <div style="height: 90%" class="animated fadeIn time">
      <button class="animated slideInUp time" mat-raised-button>Get Started</button>
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

    button {
      margin-left: 47%;
      margin-top: 8%;
      border-radius: 30px;
      font-size: 1.1em;
      text-transform: uppercase;
      background-image: linear-gradient(to right bottom, #ffdab4, #ff6803);
      color: brown;
      width: 16%;
      height: 8%;
    }
    
    button:hover{
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3);
    }

    .time {
      animation-duration: 2s;
      animation-delay: 1s;
    }

    .time1 {
      animation-duration: 2s;
      animation-delay: 3s;
    }
  `]
})

export class HomeComponent {
}

// #1665c1
