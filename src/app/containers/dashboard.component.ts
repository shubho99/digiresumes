import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';

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
  constructor(@Inject(PLATFORM_ID) private platformId: any, private authRepo: AuthRepoService) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.className = 'intro-body';
    }
  }
}
