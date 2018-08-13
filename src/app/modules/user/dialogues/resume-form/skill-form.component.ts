import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {Skill} from '../../../core/models/skill';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-skills-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input matInput formControlName="skill" placeholder="Mention your skill"/>
        </mat-form-field>
        <mat-form-field>
          <input matInput formControlName="level" placeholder="Level"/>
        </mat-form-field>
        <mat-form-field>
          <input matInput formControlName="represent" placeholder="Represent"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button type="submit" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="skill">Update</span>
            <span *ngIf="!skill">Add</span>
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
export class SkillFormComponent implements OnInit {
  form: FormGroup;
  skill: Skill;
  resumeId: string;
  loading = false;

  constructor(public dialog: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService, private alert: AlertService) {
  }

  ngOnInit() {
    this.resumeId = this.data.resume_id;
    this.skill = this.data.skill;
    const skill = this.skill ? this.skill.skill : null;
    const level = this.skill ? this.skill.level : null;
    const represent = this.skill ? this.skill.represent : null;
    this.form = new FormGroup({
      'skill': new FormControl(skill, [Validators.required]),
      'level': new FormControl(level, [Validators.required]),
      'represent': new FormControl(represent, [Validators.required]),
    });
  }

  cancel() {
    this.dialog.close();
  }

  addOrUpdate() {
    if (this.skill) {
      this.updateSkill();
    } else {
      this.addSkill();
    }
  }

  addSkill() {
    this.loading = true;
    this.resumeRepo.addSkill(this.form.value, this.resumeId).subscribe((res) => {
      this.loading = false;
      this.alert.success('Skill added Successfully');
      this.dialog.close();
    });
  }

  updateSkill() {
    this.loading = true;
    this.resumeRepo.updateSkill(this.form.value, this.resumeId, this.skill._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Skill updated Successfully');

      this.dialog.close();
    });
  }
}
