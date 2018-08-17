import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertService} from '../../../core/services/alert.service';
import {Education} from '../../../core/models/education';

@Component({
  selector: 'app-education-form',
  template: `
    <form [formGroup]="form" (submit)="this.form.valid && addOrUpdateEducation()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="school_name" matInput placeholder="School or college Name"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="field" matInput placeholder="Field"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="percentage" matInput placeholder="Percentage"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="degree_type" matInput placeholder="Degree type"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="graduation_month" matInput placeholder="Graduation month"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="graduation_year" matInput placeholder="Graduation year"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="education">Update</span>
            <span *ngIf="!education">Add</span>
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
export class EducationFormComponent implements OnInit {
  form: FormGroup;
  education: Education;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.education = this.data.education;
    const schoolName = this.education ? this.education.school_name : null;
    const city = this.education ? this.education.city : null;
    const state = this.education ? this.education.state : null;
    const field = this.education ? this.education.field : null;
    const degree_type = this.education ? this.education.degree_type : null;
    const graduation_month = this.education ? this.education.graduation_month : null;
    const graduation_year = this.education ? this.education.graduation_year : null;
    const percentage = this.education ? this.education.percentage : null;
    this.form = new FormGroup({
      'school_name': new FormControl(schoolName, [Validators.required]),
      'city': new FormControl(city, [Validators.required]),
      'state': new FormControl(state, [Validators.required]),
      'field': new FormControl(field, [Validators.required]),
      'degree_type': new FormControl(degree_type, [Validators.required]),
      'graduation_month': new FormControl(graduation_month, [Validators.required]),
      'graduation_year': new FormControl(graduation_year, [Validators.required]),
      'percentage': new FormControl(percentage, [Validators.required]),
    });
  }


  addOrUpdateEducation() {
    if (this.education) {
      this.updateEducation();
    } else {
      this.addEducation();
    }
  }

  updateEducation() {
    this.loading = true;
    this.resumeRepo.updateEducation(this.form.value, this.resumeId, this.education._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Education updated Successfully');
      this.dialog.close();
    });
  }

  addEducation() {
    this.loading = true;
    this.resumeRepo.addEducation(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Education added Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }
}

