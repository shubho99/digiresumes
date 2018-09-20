import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <ngx-loading [show]="loading"></ngx-loading>
    <router-outlet></router-outlet>    
    <!--<app-footer></app-footer>-->
  `,
  styles: [`

  `]
})
export class AppComponent {
  loading;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }
}
