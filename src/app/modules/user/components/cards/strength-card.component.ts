import {Component, Input} from '@angular/core';
import {Strength} from '../../../core/models/strength';

@Component({
  selector: 'app-strength-card',
  template: `    
    <ul style="color: #fff;">
      <li>
        {{strength.name}}
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
export class StrengthCardComponent {
  @Input() strength: Strength;
}
