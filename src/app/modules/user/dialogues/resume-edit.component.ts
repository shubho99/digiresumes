import {Component, Inject, OnInit} from '@angular/core';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../core/services/alert.service';

@Component({
  selector: 'app-resume-edit',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && update()">
      <div class="alternate" fxLayout="column">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Resume name"/>
          <mat-error>Resume Name is Required</mat-error>
        </mat-form-field>
        <button mat-raised-button color="primary">Update</button>
      </div>
    </form>

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
    this.resume = this.data.resume;
    const resumeName = this.resume ? this.resume.name : null;
    this.form = new FormGroup({
      'name': new FormControl(resumeName, [Validators.required])
    });
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
}
