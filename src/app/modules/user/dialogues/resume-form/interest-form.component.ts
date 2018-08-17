import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertService} from '../../../core/services/alert.service';
import {Interest} from '../../../core/models/interest';

@Component({
  selector: 'app-interest-form',
  template: `
    <form [formGroup]="form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <textarea formControlName="interest" rows="5" matInput placeholder="Describe your interest"></textarea>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="interest">Update</span>
            <span *ngIf="!interest">Add</span>
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
export class InterestFormComponent implements OnInit {
  form: FormGroup;
  interest: Interest;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.interest = this.data.interest;
    const interest = this.interest ? this.interest.interest : null;
    this.form = new FormGroup({
      'interest': new FormControl(interest, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.interest) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.loading = true;
    this.resumeRepo.addInterest(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Interest added Successfully');
      this.dialog.close();
    });
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateInterest(this.form.value, this.resumeId, this.interest._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Interest updated Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }


}
