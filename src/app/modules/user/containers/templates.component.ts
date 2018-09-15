import {Component} from '@angular/core';
import {Templates} from '../../core/utils/utils';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-templates',
  template: `
    <div fxLayout="column" fxLayoutAlign="center stretch" fxLayoutGap="20px">
      <div style="flex-flow: wrap" class="alternate res-templates" fxLayoutAlign=" start center" fxLayoutGap="30px">
        <app-template-card *ngFor="let template of this.templates" [resumeId]="resumeId"
                           [template]="template"></app-template-card>
        <span *appFlexAlignmentHack></span>
      </div>
    </div>

  `,
  styles: [`
    span {
      width: 100px;
    }
  `]
})
export class TemplatesComponent {
  resumeId;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((res) => {
      this.resumeId = res['id'];
    });
  }

  templates = Templates;
}
