import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../core/services/alert.service';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {Strength} from '../../../core/models/strength';
import {Weakness} from '../../../core/models/weakness';

@Component({
  selector: 'app-weakness-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="title"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button type="submit" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="weakness">Update</span>
            <span *ngIf="!weakness">Add</span>
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
export class WeaknessFormComponent implements OnInit {
  form: FormGroup;
  weakness: Weakness;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {

  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.weakness = this.data.weakness;
    const name = this.weakness ? this.weakness.name : null;
    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required])
    });
  }

  cancel() {
    this.dialog.close();
  }

  addOrUpdate() {
    if (this.weakness) {
      this.update();
    } else {
      this.add();
    }
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateWeakness(this.form.value, this.resumeId, this.weakness._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Weakness updated Successfully');
      this.dialog.close();
    });
  }

  add() {
    this.loading = true;
    this.resumeRepo.addWeakness(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Weakness added Successfully');
      this.dialog.close();
    });
  }
}
