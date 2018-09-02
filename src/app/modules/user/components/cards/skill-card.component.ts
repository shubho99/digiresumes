import {Component, Input} from '@angular/core';
import {Skill} from '../../../core/models/skill';

@Component({
  selector: 'app-skill-card',
  template: `
        <p class="contact-summary">{{this.skill.skill}}</p>
        <mat-progress-bar mode="determinate" value="70"></mat-progress-bar>
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
