import {Component, Inject, OnDestroy, PLATFORM_ID} from '@angular/core';
import {Utils} from '../../core/utils/utils';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  template: `
    <app-layout>
      <app-user-header-component></app-user-header-component>
    </app-layout>   
  `,
  styles: [`
  `]
})
export class UserDashboardComponent implements OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.className = 'user-background';
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.className = 'intro-body';
    }
  }
}
