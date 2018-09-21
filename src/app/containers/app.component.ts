import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Orientation, Utils} from '../modules/core/utils/utils';

@Component({
  selector: 'app-root',
  template: `
    <ngx-loading [show]="loading"></ngx-loading>
    <router-outlet *ngIf="!this.isLandscape"></router-outlet>
    <div class="landscape" *ngIf="this.isLandscape">
      <h1>Not supported for Landscape mode</h1>
    </div>
  `,
  styles: [`
    .landscape{
      background: black;
      opacity: 0.5;
      width: 100vw;
      height: 100vh;
    }
    h1{
      color: white;
      text-align: center;
      padding-top: 22%;
    }
  `]
})
export class AppComponent {
  loading;
  isLandscape = false;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loading = false;
      }
    });
    this.checkLandscape();
  }

  checkLandscape() {
    if (window.innerHeight < window.innerWidth && Utils.isMobile()) {
      this.isLandscape = true;
    }
    window.addEventListener('orientationchange', () => {
      if (window.orientation === Orientation.LANDSCAPE_LEFT || window.orientation === Orientation.LANDSCAPE_RIGHT) {
        this.isLandscape = true;
      } else {
        this.isLandscape = false;
      }
    }, false);
  }
}
