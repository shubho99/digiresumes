import {Component, Input} from '@angular/core';
import {Weakness} from '../../../core/models/weakness';

@Component({
  selector: 'app-weakness-card',
  template: `
    <ul style="color: #fff;">
      <li>
        {{weakness.name}}
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
export class WeaknessCardComponent {
  @Input() weakness: Weakness;
}
