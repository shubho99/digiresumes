import {Component, Input} from '@angular/core';
import {EmploymentHistory} from '../../../core/models/employment-history';

@Component({
  selector: 'app-employment-history-card',
  template: `
    <h3>{{employmentHistory.designation}}
      <span style="text-transform: lowercase !important; font-size: 10pt;">
                  @{{employmentHistory.organisation}}
                  </span>
    </h3>
    <span style="color: #5da4d9" *ngIf="employmentHistory.end_month">
                    {{employmentHistory.start_month}} {{employmentHistory.start_year}} - 
                    {{employmentHistory.end_month}} {{employmentHistory.end_year}}
                  </span>
    <span style="color: #5da4d9" *ngIf="!employmentHistory.end_month">
                    {{employmentHistory.start_month}} {{employmentHistory.start_year}}
                  </span>
    <h4 class="container">
      {{employmentHistory.city}}, {{employmentHistory.state}} <br>
      {{employmentHistory.employer}}
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


  `]
})
export class EmploymentHistoryCardComponent {
  @Input() employmentHistory: EmploymentHistory;
}
