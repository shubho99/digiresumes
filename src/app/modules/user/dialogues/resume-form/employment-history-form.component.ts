import {Component, Inject, OnInit} from '@angular/core';
import {Education} from '../../../core/models/education';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertService} from '../../../core/services/alert.service';
import {EmploymentHistory} from '../../../core/models/employment-history';

@Component({
  selector: 'app-employment-history-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="employer" matInput placeholder="Employer"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="designation" matInput placeholder="Designation"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="organisation" matInput placeholder="Organisation"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="start_month" matInput placeholder="Starting Month"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="start_year" matInput placeholder="Starting Year"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="end_month" matInput placeholder="End month"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="end_year" matInput placeholder="End year"/>
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
  `]
})
export class EmploymentHistoryFormComponent implements OnInit {
  form: FormGroup;
  employmentHistory: EmploymentHistory;
  resumeId: string;
  loading = false;

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

}
