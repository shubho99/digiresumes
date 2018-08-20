import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  template: `
    <app-user-header-component></app-user-header-component>
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class UserDashboardComponent {
  constructor() {
    document.body.className = 'user-background';
  }
}
