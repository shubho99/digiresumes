import {Routes} from '@angular/router';
import {DashboardComponent} from './containers/dashboard.component';
import {NotFoundComponent} from './components/not.found.component';
import {HomeComponent} from './containers/home.component';
import {LoginComponent} from './containers/login.component';
import {GetStartedComponent} from './containers/get.started.component';
import {ContactUsComponent} from './containers/contact.us.component';

export const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: 'home', component: HomeComponent
  },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'get-started', component: GetStartedComponent
    },
    {
      path: 'contact-us', component: ContactUsComponent
    }
  ]
},
  {
    path: '**', component: NotFoundComponent
  }];
