import {Component, Inject, OnInit} from '@angular/core';
import {Skill} from '../../../core/models/skill';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertService} from '../../../core/services/alert.service';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {ProjectDetail} from '../../../core/models/project-detail';

@Component({
  selector: 'app-project-detail-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="title" matInput placeholder="title"/>
          <mat-error>Title is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="description" matInput placeholder="Description"></textarea>
          <mat-error>Description is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="duration" matInput placeholder="duration"/>
          <mat-error>Duration is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="role" matInput placeholder="role"/>
          <mat-error>Role is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button type="submit" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="projectDetail">Update</span>
            <span *ngIf="!projectDetail">Add</span>
          </button>
          <button type="button" (click)="cancel()" style="width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>

  `,
  styles: [`
  `]
})
export class ProjectDetailFormComponent implements OnInit {
  form: FormGroup;
  projectDetail: ProjectDetail;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {

  }

  ngOnInit() {
     this.projectDetail = this.data.project_detail;
     this.resumeId = this.data.resume_id;
    const title = this.projectDetail ? this.projectDetail.title : null;
    const description = this.projectDetail ? this.projectDetail.description : null;
    const role = this.projectDetail ? this.projectDetail.role : null;
    const duration = this.projectDetail ? this.projectDetail.duration : null;
    this.form = new FormGroup({
      'title': new FormControl(title, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'role': new FormControl(role, [Validators.required]),
      'duration': new FormControl(duration, [Validators.required]),
    });
  }

  cancel() {
    this.dialog.close();
  }

  addOrUpdate() {
    if (this.projectDetail) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.loading = true;
    this.resumeRepo.addProjectDetail(this.form.value, this.resumeId).subscribe(() => {
      this.loading = false;
      this.alert.success('Project Details added Successfully');
      this.dialog.close();
    });
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateProjectDetail(this.form.value, this.resumeId, this.projectDetail._id).subscribe(() => {
      this.loading = false;
      this.alert.success('Project Details updated Successfully');
      this.dialog.close();
    });
  }
}
