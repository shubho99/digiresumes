import {Component, Input} from '@angular/core';
import {ProjectDetail} from '../../../core/models/project-detail';

@Component({
  selector: 'app-project-detail-card',
  template: `
    <h3>
      {{projectDetail.title}}<br>
      {{projectDetail.description}}<br>
      {{projectDetail.duration}}<br>
      {{projectDetail.role}}
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
export class ProjectDetailCardComponent {
  @Input() projectDetail: ProjectDetail;
}
