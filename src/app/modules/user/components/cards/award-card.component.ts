import {Component, Input} from '@angular/core';
import {AwardsAchivement} from '../../../core/models/awards-achivement';

@Component({
  selector: 'app-award-card',
  template: `
    <ul>
      <li>
        <div fxLayout="row" fxLayoutGap="10px">
          <i class="fa fa-dot-circle-o" style="color:#a85f46;" aria-hidden="true"></i>
          <span class="hack">{{award.awards_and_achivements}}</span>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }
    ul li {
      list-style-type: none;
      vertical-align: top;
      margin-bottom: 5px;
    }
  `]
})
export class AwardCardComponent {
  @Input() award: AwardsAchivement;
}
