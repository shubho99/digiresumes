import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {ResumeService} from '../core/services/resume.service';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  entryComponents: [],
  providers: [ResumeService]
})
export class UserModule {
}
