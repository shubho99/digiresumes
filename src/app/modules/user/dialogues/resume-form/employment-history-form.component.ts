import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertService} from '../../../core/services/alert.service';
import {EmploymentHistory} from '../../../core/models/employment-history';
import {Months} from '../../../core/utils/utils';

@Component({
  selector: 'app-employment-history-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="designation" matInput placeholder="Designation"/>
          <mat-error>Designation is Required</mat-error>
          <mat-hint>Example - Web Developer</mat-hint>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="organisation" matInput placeholder="Organisation"/>
          <mat-error>Organisation is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
          <mat-error>City is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
          <mat-error>State is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="employer" matInput placeholder="Explain About Your Work"></textarea>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <mat-form-field class="date-field">
          <div fxLayout="row">
            <input formControlName="start_month" matInput placeholder="Starting Month">
            <mat-menu [overlapTrigger]="false" #startingMonth="matMenu">
              <mat-list style="height: 300px">
                <mat-list-item *ngFor="let month of this.months" (click)="updateStartMonth(month)">{{month}}
                </mat-list-item>
              </mat-list>
            </mat-menu>
            <button mat-icon-button type="button" [matMenuTriggerFor]="startingMonth">
              <mat-icon>arrow_drop_down</mat-icon>
            </button>
          </div>
          <mat-error>Please provide Starting Month</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="start_year" matInput placeholder="Starting Year"/>
          <mat-error>Starting Year is Required</mat-error>
        </mat-form-field>
        <mat-form-field style="width: 25%">
          <div fxLayout="row">
            <input formControlName="end_month" matInput placeholder="End Month(Don't fill if still Working)">
            <mat-menu [overlapTrigger]="false" #listIdMenu="matMenu">
              <mat-list style="height: 300px">
                <mat-list-item *ngFor="let month of this.months" (click)="updateEndMonth(month)">{{month}}
                </mat-list-item>
              </mat-list>
            </mat-menu>
            <button mat-icon-button type="button" [matMenuTriggerFor]="listIdMenu">
              <mat-icon>arrow_drop_down</mat-icon>
            </button>
          </div>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="end_year" matInput placeholder="End year(Don't fill if still Working)"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="employmentHistory">Update</span>
            <span *ngIf="!employmentHistory">Add</span>
          </button>
          <button (click)="cancel()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-hint {
      color: #538ec3 !important;
    }
  `]
})
export class EmploymentHistoryFormComponent implements OnInit {
  form: FormGroup;
  employmentHistory: EmploymentHistory;
  resumeId: string;
  loading = false;
  months = Months;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.employmentHistory = this.data.employment_history;
    const employer = this.employmentHistory ? this.employmentHistory.employer : null;
    const designation = this.employmentHistory ? this.employmentHistory.designation : null;
    const organisation = this.employmentHistory ? this.employmentHistory.organisation : null;
    const city = this.employmentHistory ? this.employmentHistory.city : null;
    const state = this.employmentHistory ? this.employmentHistory.state : null;
    const start_month = this.employmentHistory ? this.employmentHistory.start_month : null;
    const start_year = this.employmentHistory ? this.employmentHistory.start_year : null;
    const end_month = this.employmentHistory ? this.employmentHistory.end_month : null;
    const end_year = this.employmentHistory ? this.employmentHistory.end_year : null;
    this.form = new FormGroup({
      'employer': new FormControl(employer, [Validators.required]),
      'designation': new FormControl(designation, [Validators.required]),
      'organisation': new FormControl(organisation, [Validators.required]),
      'city': new FormControl(city, [Validators.required]),
      'state': new FormControl(state, [Validators.required]),
      'start_month': new FormControl(start_month, [Validators.required]),
      'start_year': new FormControl(start_year, [Validators.required]),
      'end_month': new FormControl(end_month),
      'end_year': new FormControl(end_year),
    });
  }

  cancel() {
    this.dialog.close();
  }

  addOrUpdate() {
    if (this.employmentHistory) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.loading = true;
    this.resumeRepo.addEmploymentHistory(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Employment History  updated Successfully');
      this.dialog.close();
    });
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateEmploymentHistory(this.form.value, this.resumeId, this.employmentHistory._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Employment History  updated Successfully');
      this.dialog.close();
    });
  }

  updateStartMonth(month) {
    console.log(this.form.value);
    this.form.patchValue({start_month: month});
  }

  updateEndMonth(month) {
    this.form.patchValue({end_month: month});
  }

}
