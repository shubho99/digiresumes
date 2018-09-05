import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  template: `
    <app-user-header-component></app-user-header-component>
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class UserDashboardComponent implements OnDestroy {
  constructor() {
    document.body.className = 'user-background';
  }

  ngOnDestroy() {
    document.body.className = 'intro-body';
  }
}
