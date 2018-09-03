import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';

@Component({
  selector: 'app-skill-card',
  template: `
        <p class="contact-summary">{{this.skill.skill}}</p>
        <mat-progress-bar *ngIf="this.skill.level === 'intermediate'" mode="determinate" value="70"></mat-progress-bar>
        <mat-progress-bar *ngIf="this.skill.level === 'advance'" mode="determinate" value="90"></mat-progress-bar>
        <mat-progress-bar *ngIf="this.skill.level === 'basic'" mode="determinate" value="50"></mat-progress-bar>
  `,
  styles: [`
   
    h4, p {
      color: whitesmoke;
    }
  `]
})
export class SkillCardComponent {
  @Input() skill: Skill;
}
