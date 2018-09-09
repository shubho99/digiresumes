import {Education} from '../../../core/models/education';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-education-card',
  template: `
    <h3>{{education.degree_type}}
      <span style="text-transform: lowercase !important; font-size: 10pt;">@{{education.school_name}}</span></h3>
    <span style="color: #5da4d9; float: right; margin-top: -5%;">{{education.graduation_month}} {{education.graduation_year}}</span>
    <h4 class="container">
      {{education.city}}, {{education.state}} <br>
      {{education.field}} - {{education.percentage}}
    </h4>
  `,
  styles: [`

    h3, span {
      text-transform: uppercase;
      color: #767270;
      margin-top: 5%;
    }
    
    h4, p {
      color: #767270;
    }
    
    h4{    
      text-transform: capitalize;    
    }
  `]
})
export class EducationCardComponent {
  @Input() education: Education;
}
