
import {takeWhile} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-settings',
  template: `
    <div  class="alternate" fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px" style="margin: 20px;">
      <div fxLayout="row" fxLayoutAlign="center center">
        <h1 style="color: #538ec3;">Settings</h1></div>
      <div class="profile-container res-profile-container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="start stretch">
        <div style="width: 35%">
          <h2 class="res-profile-settings">Profile</h2>
        </div>
        <div style="width: 65%;" class="width-setting">
          <app-profile-settings [user]="this.user"></app-profile-settings>
        </div>
      </div>
      <div fxLayout="row" fxHide.gt-xs style="border-bottom: 2px solid #80808017; width: 100%;"></div>
      <div class="profile-container profile-container-1 res-profile-container" fxLayout="row"
           fxLayout.xs="column" fxLayoutAlign="start stretch">
        <div style="width: 35%">
          <h2 class="res-profile-settings">Password</h2>
        </div>
        <div style="width: 65%;" class="width-setting">
          <app-password-setting></app-password-setting>    
        </div>
      </div>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    .profile-container {
      width: 70%;
      margin-top: 30px;
      border-bottom: 2px solid #80808017;
      padding-bottom: 60px;
    }
    .profile-container-1 {
      border-bottom: 2px solid transparent;
    }
    h1, h2 {
      font-family: 'Inknut Antiqua', serif;
      text-transform: uppercase;
      color:  #7de261;
    }    
  `]
})
export class SettingsComponent implements OnInit, OnDestroy {
  user: User = null;
  isAlive = true;
loading = false;
  constructor(private authRepo: AuthRepoService) {
  }

  ngOnInit() {
    this.loading = true;
    this.authRepo.getMe().pipe(takeWhile(() => this.isAlive)).subscribe((res) => {
      this.loading = false;
      this.user = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
