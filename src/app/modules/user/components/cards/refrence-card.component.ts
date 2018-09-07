import {Component, Input} from '@angular/core';
import {Refrence} from '../../../core/models/refrence';

@Component({
  selector: 'app-refrence-card',
  template: `
    <h3>
      {{refrence.name}}<br>
      {{refrence.relationship}}<br>
      {{refrence.company}}<br>
      {{refrence.email}}<br>
      {{refrence.phone}}<br>
      {{refrence.address}}
    </h3>
  `,
  styles: [`
    h3, span {
      text-transform: capitalize;
      color: #767270;
      margin-top: 5%;
    }
  `]
})
export class RefrenceCardComponent {
  @Input() refrence: Refrence;
}
