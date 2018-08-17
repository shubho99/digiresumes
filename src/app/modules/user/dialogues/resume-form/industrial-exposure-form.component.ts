import {Component, Inject, OnInit} from '@angular/core';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../core/services/alert.service';
import {IndustrialExposure} from '../../../core/models/industrial-exposure';

@Component({
  selector: 'app-industrial-exposure-form',
  template: `
    <form [formGroup]="form" (submit)="this.form.valid && addOrUpdate()">
    <div class="alternate" fxLayout="column" fxLayoutGap="10px">
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
        <input formControlName="start_year" matInput type="number" placeholder="Starting Year"/>
      </mat-form-field>
      <mat-form-field>
        <input formControlName="end_month" matInput placeholder="End Month"/>
      </mat-form-field>
      <mat-form-field>
        <input formControlName="end_year" matInput type="number" placeholder="End Year"/>
      </mat-form-field>
      <mat-form-field>
        <input formControlName="work" matInput placeholder="Tell about your Work"/>
      </mat-form-field>
      <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
        <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
          <span *ngIf="industrialExposure">Update</span>
          <span *ngIf="!industrialExposure">Add</span>
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
export class IndustrialExposureFormComponent implements OnInit {
  form: FormGroup;
  industrialExposure: IndustrialExposure;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.industrialExposure = this.data.industrial_exposure;
    this.resumeId = this.data.resume_id;
    const organisation = this.industrialExposure ? this.industrialExposure.organisation : null;
    const city = this.industrialExposure ? this.industrialExposure.city : null;
    const state = this.industrialExposure ? this.industrialExposure.state : null;
    const start_month = this.industrialExposure ? this.industrialExposure.start_month : null;
    const start_year = this.industrialExposure ? this.industrialExposure.start_year : null;
    const end_month = this.industrialExposure ? this.industrialExposure.end_month : null;
    const end_year = this.industrialExposure ? this.industrialExposure.end_year : null;
    const work = this.industrialExposure ? this.industrialExposure.work : null;
    this.form = new FormGroup({
      'organisation': new FormControl(organisation, [Validators.required]),
      'city': new FormControl(city, [Validators.required]),
      'state': new FormControl(state, [Validators.required]),
      'start_month': new FormControl(start_month, [Validators.required]),
      'start_year': new FormControl(start_year, [Validators.required]),
      'end_month': new FormControl(end_month, [Validators.required]),
      'end_year': new FormControl(end_year, [Validators.required]),
      'work': new FormControl(work, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.industrialExposure) {
      this.update();
    } else {
      this.add();
    }
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateIndustrialExposure(this.form.value, this.resumeId, this.industrialExposure._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Industrial Industrial updated Successfully');
      this.dialog.close();
    });
  }

  add() {
    this.loading = true;
    this.resumeRepo.addIndustrialExposure(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Industrial Industrial added Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }
}
