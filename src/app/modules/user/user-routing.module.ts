import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserDashboardComponent} from './containers/user-dashboard.component';

export const routes: Routes = [
  {
    path: '', component: UserDashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
