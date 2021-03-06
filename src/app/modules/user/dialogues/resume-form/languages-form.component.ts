import {Component, Inject, OnInit} from '@angular/core';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {SkillFormComponent} from './skill-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../core/services/alert.service';
import {Language} from '../../../core/models/language';
import {Levels} from '../../../core/utils/utils';

@Component({
  selector: 'app-languages-form',
  template: `
    <form [formGroup]="form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Mention your Language"/>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <mat-form-field class="date-field res-date-field">
          <div fxLayout="row">
            <input formControlName="level" matInput placeholder="Level">
            <mat-menu [overlapTrigger]="false" #startingMonth="matMenu">
              <mat-list style="height: 300px">
                <mat-list-item *ngFor="let level of this.levels" (click)="updateLevel(level)">{{level}}
                </mat-list-item>
              </mat-list>
            </mat-menu>
            <button mat-icon-button type="button" [matMenuTriggerFor]="startingMonth">
              <mat-icon>arrow_drop_down</mat-icon>
            </button>
          </div>
          <mat-error>Please provide A Valid Level</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="language">Update</span>
            <span *ngIf="!language">Add</span>
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
export class LanguagesFormComponent implements OnInit {
  form: FormGroup;
  language: Language;
  resumeId: string;
  loading = false;
  levels = Levels;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.language = this.data.language;
    const name = this.language ? this.language.name : null;
    const level = this.language ? this.language.level : null;
    const represent = this.language ? this.language.represent : null;
    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'level': new FormControl(level, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.language) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.loading = true;
    this.resumeRepo.addLanguage(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Language added Successfully');
      this.dialog.close();
    });
  }

  update() {
    this.loading = true;
    this.resumeRepo.updateLanguage(this.form.value, this.resumeId, this.language._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Language updated Successfully');
      this.dialog.close();
    });
  }

  cancel() {
    this.dialog.close();
  }

  updateLevel(level) {
    this.form.patchValue({level: level});
  }
}
