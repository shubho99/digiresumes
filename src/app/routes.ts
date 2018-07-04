import {Routes} from '@angular/router';
import {DashboardComponent} from './containers/dashboard';
import {NotFoundComponent} from './components/not-found';
import {HomeComponent} from './components/home';
import {QuickSetupComponent} from './components/quick-setup';

export const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: 'home', component: HomeComponent
  },
    {
      path: 'quick-setup', component: QuickSetupComponent
    }]
},
  {
    path: '**', component: NotFoundComponent
  }];
