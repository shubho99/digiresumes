import {Component, Input} from '@angular/core';
import {Interest} from '../../../core/models/interest';

@Component({
  selector: 'app-interest-card',
  template: `
    <ul>
      <li>
        {{interest.interest}}
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
export class InterestCardComponent {
  @Input() interest: Interest;
}
