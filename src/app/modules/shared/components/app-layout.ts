import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <ng-content></ng-content><!--Header will go here-->
    <router-outlet class="content" (activate)="onActivate()"></router-outlet>
  `,
  styles: [`
  `]
})

export class LayoutComponent {
  onActivate() {
    window.scrollTo(0, 0);
  }
}
