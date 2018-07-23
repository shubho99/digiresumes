import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {ResumeService} from '../core/services/resume.service';
import {OnboardingComponent} from './containers/onboarding.component';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {EmailVerificationGuard} from '../../guards/email-verification-guard';
import {OnboardGuard} from '../../guards/onboard-guard';

@NgModule({
  declarations: [
    UserDashboardComponent,
    OnboardingComponent,
    EmailVerificationComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  entryComponents: [],
  providers: [ResumeService, EmailVerificationGuard,OnboardGuard]
})
export class UserModule {
}
