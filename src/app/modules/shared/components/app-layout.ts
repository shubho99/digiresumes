import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

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
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  onActivate() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
