import {Component, Input} from '@angular/core';
import {Language} from '../../../core/models/language';

@Component({
  selector: 'app-language-card',
  template: `
    <p class="contact-summary">{{language.name}}</p>
    <mat-progress-bar *ngIf="this.language.level === 'intermediate'" mode="determinate" value="70"></mat-progress-bar>
    <mat-progress-bar *ngIf="this.language.level === 'advance'" mode="determinate" value="90"></mat-progress-bar>
    <mat-progress-bar *ngIf="this.language.level === 'basic'" mode="determinate" value="50"></mat-progress-bar>
  `,
  styles: [`
   
    h4, p {
      /*color: #767270;*/
      color: whitesmoke;
    }
  `]
})
export class LanguageCardComponent {
  @Input() language: Language;
}
