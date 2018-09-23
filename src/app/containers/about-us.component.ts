import {Component} from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <!--<div fxLayout="column">-->
    <mat-card fxLayout="column" fxLayoutGap="50px">
      <div class="background-image res-about-background-image" fxLayout="row" fxLayoutAlign="start center">
        <h1 class="hero-text"><span class="main-text">We're on a mission</span> <br>
          to help people get closer to their career goals</h1>
      </div>

      <div fxLayout="column" fxLayoutAlign="start center">
        <h2 class="about-text">Who is DigiResume?</h2>
        <p class="SectionTitle__Subtitle">We all know the value of an impressive resume and the role it plays when we look for a job.
          Building a great resume from scratch is usually a difficult and time-consuming task. Getting good inspiration from the web is
          possible, but the information is random and scattered to many places.<br>
          <br>
          <span style="font-weight: bold">DigiResumes.com</span> grew from that frustration. We want to help you build the perfect resume
          effortlessly. Better than that, we also want to help you with your personal job hunt. Super-Resume is the first service to give
          you immediate feedback on who is looking at your resumé. Now get ready to make smart decisions and win the perfect job.</p>
      </div>

      <div class="team" fxLayout="column" fxLayoutAlign="start center">
        <div style="width: 68%;
    margin-top: 15px;">
          <p class="SectionTitle__Subtitle teamtitle"><span class="team-text">Team</span><br>We always believed that co-creation with users
            and recruiters is key to our success. By soliciting the feedback of both groups, we ensure that users and recruiters’ needs 
            continually align with our products. Not only does this allow us to improve the current application, but it has led to several 
            ideas for additional products and services.</p>
        </div>
        <div style="border: 2px solid #05386b;
    width: 20%;
    margin-top: 25px;"></div>
      </div>

      <div class="team-name" fxLayout="row" fxLayout.xs="column" fxLayoutGap="75px" fxLayoutAlign="center center">
        <div fxLayout="row" fxLayoutGap="25px">
          <button mat-fab style="background-image: url(../../assets/images/shagun.jpg);background-position: 0px -65px;" 
                  class="profile-pic res-about-profile-pic res-pic"></button>
          <div style="width: 203px" fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="center start">
            <p class="margin-miner">
              <b>Shagun Garg</b>
            </p>
            <p>
              CEO & Co-Founder
            </p>
          </div>    
        </div>
        <div fxLayout="row" fxLayoutGap="25px">
          <button mat-fab style="background-image: url(../../assets/images/shubham.jpg); background-position: 0px 5px;"
                  class="profile-pic res-about-profile-pic"></button>
          <div style="width: 208px" fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="center start">
            <p class="margin-miner">
              <b>Shubham Varhney</b>    
            </p>
            <p>
              CMO & Co-Founder
            </p>
          </div>
        </div>
      </div>
      <div fxLayout="column" fxLayoutGap="15px" fxLayoutAlign="center center">
        <h2 class="about-text contact">Do you have any questions?</h2>
        <p class="SectionTitle__Subtitle">We are here to help you out!</p>
        <button mat-raised-button style="background: #f1c232">CONTACT US</button>     
      </div>
    </mat-card>
    <div>
      <app-footer></app-footer>
    </div>
    <!--</div>-->
  `,
  styles: [`
    .margin-miner {
      margin-top: -40px;
    }
    
    p {
      color: #515d6b;
    }
    mat-card {
      /*opacity: 0.8;*/
      background-image: url(../../assets/images/noise.jpg);
      width: 90%;
      margin-left: 5%;
      margin-top: 2.5%;
      height: auto;
      margin-bottom: 2.5%;
      /*border-radius: 10px;*/
    }
    
    .main-text {
      font-size: 3rem;
      color: #ffffff;
      transition: color 0.2s;
    }
    .main-text:hover {
      color: #ff8505;
    }
    
    .background-image {
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 45%, transparent 45%),
      url(../../assets/images/dream.jpg);
      width: 104%;
      /* max-width: 116%; */
      height: 550px;
      margin-top: -23px !important;
      margin-left: -23px;
      background-attachment: fixed;
    }

    .hero-text {
      max-width: 80%;
      /*margin: auto;*/
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 1.5;
      text-align: center;
      margin-left: 40px;
      margin-top: -20px;
    }

    .about-text {
      margin: 0 0 2.3rem;
      font-size: 3rem;
      font-weight: 600;
      color: #292b2c;
    }
    .contact {
      font-size: 2.5rem;
      margin-top: 10%;
    }
    
    .team-text {
      color: #ffffff;      
      font-size: 2rem;
      line-height: 65px;
      transition: color 0.5s;
    }
    .team-text:hover {
      color: #05386b;
    }

    .SectionTitle__Subtitle {
      margin: 0;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: #515d6b;
    }

    .teamtitle {
      font-size: 1rem;
      color: #ffffff;
      line-height: 1.5rem;
    }

    .team {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 52%, 0 58%);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      background-image: linear-gradient(to right bottom, #f1c232, #ff8505);
      height: 260px;
    }
    
    .profile-pic {
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: cover;      
      margin-bottom: 10%;
      border: 3.5px solid #ff8505;
      width: 200px;
      height: 200px;
      margin-left: 13%;
    }
  `]
})
export class AboutUsComponent {
}
