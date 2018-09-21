import {Component, Input} from '@angular/core';
import {Interest} from '../../../core/models/interest';

@Component({
  selector: 'app-interest-card',
  template: `
    <ul style="list-style-type: square">
      <li>
        <div fxLayout="row" fxLayoutGap="10px">
          <i class="fa fa-dot-circle-o" style="color:#a85f46;" aria-hidden="true"></i>
          <span class="hack">{{interest.interest}}</span>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
      word-break: break-word;
    }

    ul li {
      list-style-type: none;
      vertical-align: top;
      margin-bottom: 5px;
    }
  `]
})
export class InterestCardComponent {
  @Input() interest: Interest;
}
