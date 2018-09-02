import {Component, Input} from '@angular/core';
import {AwardsAchivement} from '../../../core/models/awards-achivement';

@Component({
  selector: 'app-award-card',
  template: `
    <ul>
      <li>
        {{award.awards_and_achivements}}
      </li>
    </ul>
  `,
  styles: [`
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }
  `]
})
export class AwardCardComponent {
  @Input() award: AwardsAchivement;
}
