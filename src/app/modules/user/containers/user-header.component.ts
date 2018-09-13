
import {filter, takeWhile} from 'rxjs/operators';
import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthRepoService} from '../../core/repositry/authRepo.service';


@Component({
  selector: 'app-user-header-component',
  template: `
    <div  class="major" fxLayout="row"
         fxLayoutAlign="start center">
      <img style="width: 15%;" src="../../assets/images/digiresume-light-green.png"/>
      <span fxFlex="1 1 180px"></span>
      <div fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="start center"
           fxFlex="1 1 auto" fxHide.xs>
        <button mat-button routerLink="resumes" routerLinkActive="selected" [routerLinkActiveOptions]="{exact: true}"
                class="nav-bar-button nav-bar-button-1">Resumes
        </button>
        <button mat-button routerLink="settings" routerLinkActive="selected"
                class="nav-bar-button nav-bar-button-1">Settings
        </button>
        <button mat-button routerLink="helpcenter" routerLinkActive="selected"
                class="nav-bar-button nav-bar-button-1">Help Center
        </button>
        <button mat-button (click)="logout()"
                class="nav-bar-button nav-bar-button-1">Logout
        </button>
        <span fxFlex="200px"></span>
        <div fxLayout="row" fxLayoutGap="10px" class="username">
          <mat-icon>account_circle</mat-icon>
          <span style="padding-top: 2%">{{name}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .major {
      background: #538ec3;
      box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.2);
      height: 10%;
      padding-left: 20px;
      width: 106%
    }

    .selected {
      border: 1px solid #a8ee90 !important;
    }

    .username {
      color: #a8ee90;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
    }
  `]
})
export class UserHeaderComponent implements OnDestroy {
  name: string;
  isAlive = true;

  constructor(private authRepo: AuthRepoService, private router: Router) {
    this.authRepo.getMe().pipe(takeWhile(() => this.isAlive),filter(res => !!res),).subscribe((res) => {
      this.name = res.name;
    });
  }

  logout() {
    this.router.navigate(['logout']);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}
