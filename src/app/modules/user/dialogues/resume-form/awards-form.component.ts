import {Component, Inject, OnInit} from '@angular/core';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {Education} from '../../../core/models/education';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../core/services/alert.service';
import {AwardsAchivement} from '../../../core/models/awards-achivement';

@Component({
  selector: 'app-awards-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div  class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <textarea formControlName="awards_and_achivements" rows="5" matInput
                    placeholder="Describe about your awards and achievement"></textarea>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="award">Update</span>
            <span *ngIf="!award">Add</span>
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
export class AwardsFormComponent implements OnInit {
  form: FormGroup;
  award: AwardsAchivement;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.award = this.data.award;
    this.resumeId = this.data.resume_id;
    const awardAchivement = this.award ? this.award.awards_and_achivements : null;
    this.form = new FormGroup({
      'awards_and_achivements': new FormControl(awardAchivement, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.award) {
      this.update();
    } else {
      this.add();
    }
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateAward(this.form.value, this.resumeId, this.award._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Award Achievement  updated Successfully');
      this.dialog.close();
    });
  }

  add() {
    this.loading = true;
    this.resumeRepo.addAward(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Award Achievement  added Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }
}
