import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-settings',
  template: `
    <div  class="alternate" fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px" style="margin: 20px;">
      <div fxLayout="row" fxLayoutAlign="center center">
        <h1 style="color: #8de773">Settings</h1></div>
      <div class="profile-container" fxLayout="row" fxLayoutAlign="start stretch">
        <div style="width: 35%">
          <h1>Profile</h1>
        </div>
        <div style="width: 65%;">
          <app-profile-settings [user]="this.user"></app-profile-settings>
        </div>
      </div>
      <div class="profile-container" fxLayout="row" fxLayoutAlign="start stretch">
        <div style="width: 35%">
          <h1>Password</h1>
        </div>
        <div style="width: 65%;">
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
      border-bottom: 1px solid #80808017;
      padding-bottom: 30px;
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
    this.authRepo.getMe().takeWhile(() => this.isAlive).subscribe((res) => {
      this.loading = false;
      this.user = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
