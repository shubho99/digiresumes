import {Component, Inject, OnInit} from '@angular/core';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../core/services/alert.service';
import {Objective} from '../../../core/models/objective';

@Component({
  selector: 'app-objectives-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="objective" matInput placeholder="Your Objective"/>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="date" matInput type="number" placeholder="Date"/>
          <mat-error>Date is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="place" matInput placeholder="Place"/>
          <mat-error>Place is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="declaration" matInput placeholder="Declaration"/>
          <mat-error>Declaration is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="objective">Update</span>
            <span *ngIf="!objective">Add</span>
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
export class ObjectivesFormComponent implements OnInit {
  form: FormGroup;
  objective: Objective;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.objective = this.data.objective;
    const objective = this.objective ? this.objective.objective : null;
    const date = this.objective ? this.objective.date : null;
    const place = this.objective ? this.objective.place : null;
    const declaration = this.objective ? this.objective.declaration : null;
    this.form = new FormGroup({
      'objective': new FormControl(objective, [Validators.required]),
      'date': new FormControl(date, [Validators.required]),
      'place': new FormControl(place, [Validators.required]),
      'declaration': new FormControl(declaration, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.objective) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.loading = true;
    this.resumeRepo.addObjective(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Objective added Successfully');
      this.dialog.close();
    });
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateObjective(this.form.value, this.resumeId, this.objective._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Objective updated Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }
}
