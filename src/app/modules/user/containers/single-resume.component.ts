import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';

@Component({
  selector: 'app-single-resume',
  template: `
    <div fxLayout="row">
      <mat-card class="side-bar-card">
      </mat-card>
      <div fxLayout="column">
        <mat-card fxLayout="column">
          <mat-card-header>
            <div fxLayout="row" fxLayoutGap="50px" class="username">
              <mat-icon>book</mat-icon>
              <span>Education</span>
            </div>
          </mat-card-header>    
          <mat-card-content>
            <div fxLayout="column" class="education-card" fxLayoutGap="20px">
              <div class="container" fxFlex="column">
                <!--<h1 *ngFor="Let resume of resume.education">{{resume}}</h1>-->
                <p>Firebase gives you functionality like analytics, databases, messaging
                  and crash reporting so you can move quickly and focus on your users</p>
              </div>
              <div fxFlex="column">
                <h1>Build Digital Resume <br>And share your link</h1>
                <p>Firebase gives you functionality like analytics, databases, messaging
                  and crash reporting so you can move quickly and focus on your users</p>
              </div>
              <div fxFlex="column">
                <h1>Build Digital Resume <br>And share your link</h1>
                <p>Firebase gives you functionality like analytics, databases, messaging
                  and crash reporting so you can move quickly and focus on your users</p>
              </div>
            </div>
          </mat-card-content>         
        </mat-card>
        <mat-card fxLayout="column">
        </mat-card>
      </div>
    </div>      
    <div  style="margin-top: 1%; margin-left: 1%" class="alternate" fxLayout="row" fxLayoutGap="20px">
      <button (click)="editResume()" mat-raised-button color="primary">Edit Resume</button>
      <button (click)="editProfile()" mat-raised-button color="accent">Edit profile Video or Picture</button>
    </div>
    <h1>{{resume.name}}</h1>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    .side-bar-card {
      background: #eaf1f8;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      width: 25%;
      margin-left: 15%;
      margin-top: 2.4%;
    }
    mat-card {
      background: #eaf1f8;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      width: 75%;
      margin-left: 2.5%;
      margin-top: 3.7%;
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
      margin-top: 5% !important;
      margin-left: 15%;
    }
    .container {
      padding-bottom: 5%;
      border-bottom: 1px solid #767270;
    }
  `]
})
export class SingleResumeComponent implements OnInit {
  resume: Resume = null;
  isAlive = true;
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private resumeRepo: ResumeRepoService) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.map(params => params['id']).switchMap((id) => {
      return this.resumeRepo.getResume(id, true);
    }).take(1).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
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
}
