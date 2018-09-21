import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  template: `
   <app-layout>
     <app-header></app-header>
   </app-layout>
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
