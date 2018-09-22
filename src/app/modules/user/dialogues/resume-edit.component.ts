import {Component, Inject, OnInit} from '@angular/core';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../core/services/alert.service';

@Component({
  selector: 'app-resume-edit',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Resume name"/>
          <mat-error>Resume Name is Required</mat-error>
        </mat-form-field>
        <button style="text-transform: uppercase" mat-raised-button color="primary">
          <span *ngIf="this.resume">Update</span>
          <span *ngIf="!this.resume">Add</span>
        </button>
      </div>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>

  `,
  styles: [`
  `]
})
export class ResumeEditComponent implements OnInit {
  resume: Resume = null;
  form: FormGroup;
  loading = false;

  constructor(private resumeRepo: ResumeRepoService, public dialog: MatDialogRef<ResumeEditComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private alertService: AlertService) {
  }

  ngOnInit() {
    this.resume =  this.data ? this.data.resume : null;
    const resumeName = this.resume ? this.resume.name : null;
    this.form = new FormGroup({
      'name': new FormControl(resumeName, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.resume) {
      this.update();
    } else {
      this.add();
    }
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateResume(this.form.value, this.resume._id).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Resume Updated Successfully');
      this.dialog.close();
    }, (err) => {
      this.loading = false;
    });
  }

  add() {
    console.log(this.form.value);
    this.loading = true;
    this.resumeRepo.addResume(this.form.value).subscribe((res) => {
      this.loading = false;
      this.alertService.success('Resume Added Successfully');
      this.dialog.close();
    }, error1 => {
      this.loading = false;
    });
  }
}
