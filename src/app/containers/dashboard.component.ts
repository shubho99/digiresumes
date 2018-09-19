import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <!--<app-footer></app-footer>-->
  `,
  styles: [`

  `]
})
export class DashboardComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.className = 'intro-body';
    }
  }
}
