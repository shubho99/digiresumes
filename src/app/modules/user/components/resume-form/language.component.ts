import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Language} from '../../../core/models/language';
import {LanguagesFormComponent} from '../../dialogues/resume-form/languages-form.component';

@Component({
  selector: 'app-language',
  template: `
    <div fxLayout="column" fxLayoutGap="40px">
      <app-language-card *ngFor="let language of languages" [resumeId]="resumeId"
                                   [language]="language"></app-language-card>
      <button (click)="add()" mat-raised-button color="primary">Add Language</button>
    </div>

  `,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class LanguageComponent {
  @Input() languages: Language[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(LanguagesFormComponent, {
      disableClose: true,
      data: {resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
