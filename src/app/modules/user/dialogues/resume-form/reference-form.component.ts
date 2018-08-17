import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Reference} from '../../../core/models/reference';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-references-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Mention your Name"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="relationship" matInput placeholder="Relationship"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="company" matInput placeholder="Company"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="email" matInput type="email" placeholder="Email"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="phone" matInput type="number" placeholder="Mobile Number"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="address" matInput placeholder="Address"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="reference">Update</span>
            <span *ngIf="!reference">Add</span>
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
export class ReferenceFormComponent implements OnInit {
  form: FormGroup;
  reference: Reference;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<ReferenceFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.reference = this.data.reference;
    this.resumeId = this.data.resume_id;
    const name = this.reference ? this.reference.name : null;
    const relationship = this.reference ? this.reference.relationship : null;
    const company = this.reference ? this.reference.company : null;
    const email = this.reference ? this.reference.email : null;
    const phone = this.reference ? this.reference.phone : null;
    const address = this.reference ? this.reference.address : null;
    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'relationship': new FormControl(relationship, [Validators.required]),
      'company': new FormControl(company, [Validators.required]),
      'email': new FormControl(email, [Validators.required]),
      'phone': new FormControl(phone, [Validators.required]),
      'address': new FormControl(address, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.reference) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.loading = true;
    this.resumeRepo.addReference(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Reference added Successfully');
      this.dialog.close();
    });
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateReference(this.form.value, this.resumeId, this.reference._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Reference updated Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }
}
