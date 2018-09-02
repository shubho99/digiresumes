import {Component, Input} from '@angular/core';
import {IndustrialExposure} from '../../../core/models/industrial-exposure';

@Component({
  selector: 'app-industrial-exposure-card',
  template: `
    <h3>{{industrialExposure.organisation}}</h3>
    <span style="color: #5da4d9" *ngIf="industrialExposure.end_month">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}} - 
                    {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                  </span>
    <span style="color: #5da4d9" *ngIf="!industrialExposure.end_month">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}}
                  </span>
    <h4>
      {{industrialExposure.city}}, {{industrialExposure.state}}
    </h4>
    <p class="container">{{industrialExposure.work}}</p>
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


  `]
})
export class IndustrialExposureCardComponent {
  @Input() industrialExposure: IndustrialExposure;
}
