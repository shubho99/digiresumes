import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../core/services/alert.service';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {Strength} from '../../../core/models/strength';

@Component({
  selector: 'app-strength-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="title"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button type="submit" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="strength">Update</span>
            <span *ngIf="!strength">Add</span>
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
export class StrengthFormComponent implements OnInit {
  form: FormGroup;
  strength: Strength;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {

  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.strength = this.data.strength;
    const name = this.strength ? this.strength.name : null;
    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required])
    });
  }

  cancel() {
    this.dialog.close();
  }

  addOrUpdate() {
    if (this.strength) {
      this.update();
    } else {
      this.add();
    }
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateStrength(this.form.value, this.resumeId, this.strength._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Strength updated Successfully');
      this.dialog.close();
    });
  }

  add() {
    this.loading = true;
    this.resumeRepo.addStrength(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Strength added Successfully');
      this.dialog.close();
    });
  }
}
