import {Component, Input, OnInit} from '@angular/core';
import {AuthRepoService} from '../../core/repositry/authRepo.service';
import {User} from '../../core/models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../core/services/alert.service';

@Component({
  selector: 'app-profile-settings',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && update() ">
      <div fxLayout="column" fxLayoutAlign="start stretch">
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>Name:</label>
          <mat-form-field>
            <input formControlName="name" placeholder="Name" matInput/>
            <mat-error>Please Provide a name to update</mat-error>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <label>Email:</label>
          <mat-form-field>
            <input [value]="this.user.email" disabled placeholder="Email" matInput/>
          </mat-form-field>
        </div>
      </div>
      <div fxLayout="row" fxLayoutAlign="end center">
        <button style="text-transform: uppercase; margin-top: 15px;" mat-raised-button color="accent">Update profile</button>
      </div>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-form-field {
      width: 70%;
    }
  `]
})
export class ProfileSettingsComponent implements OnInit {
  @Input() user: User = null;
  form: FormGroup;
  loading = false;

  constructor(private authRepo: AuthRepoService, private alert: AlertService) {
  }

  ngOnInit() {
    const name = this.user ? this.user.name : null;
    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
    });
  }

  update() {
    this.loading = true;
    this.authRepo.updateUserName(this.form.value).subscribe((res) => {
      this.loading = false;
      this.alert.success('Name updated Successfully');
    }, (err) => {
      this.loading = false;
    });
  }
}
