import {Component, Input} from '@angular/core';
import {Refrence} from '../../../core/models/refrence';

@Component({
  selector: 'app-refrence-card',
  template: `
    <h3 class="container">
      {{refrence.name}} <span style="text-transform: lowercase; font-size: 10pt;">@{{refrence.company}}</span><br>
      {{refrence.relationship}}<br>      
      <span style="text-transform: lowercase">{{refrence.email}}</span><br>
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
