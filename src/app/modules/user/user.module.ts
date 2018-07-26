import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {ResumeService} from '../core/services/resume.service';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {EmailVerificationGuard} from '../../guards/email-verification-guard';
import {OnboardGuard} from '../../guards/onboard-guard';
import {OnboardingIntroComponent} from './components/onboarding/onboarding-intro.component';
import {ResumeNameComponent} from './components/onboarding/resume-name.component';
import {userRootReducer} from './reducers';
import {StoreModule} from '@ngrx/store';
import {UploadComponent} from './containers/upload.component';
import {ImageUploadComponent} from './components/upload/image-upload.component';
import {UploadFromDiskComponent} from './components/upload/upload-from-disk.component';
import {ImportVideoComponent} from './components/upload/import-video.component';
import {ResumeFormComponent} from './containers/resume-form.component';
import {ContactDetailsComponent} from './components/resume-form/contact-details.component';
import {EducationComponent} from './components/resume-form/education.component';
import {EmploymentHistoryComponent} from './components/resume-form/employment-history.component';
import {InterestComponent} from './components/resume-form/interest.component';
import {SkillComponent} from './components/resume-form/skill.component';
import {LanguagesComponent} from './components/resume-form/languages.component';
import {IndustrialExposureComponent} from './components/resume-form/industrial-exposure.component';
import {AwardsComponent} from './components/resume-form/awards.component';
import {ObjectivesComponent} from './components/resume-form/objectives.component';
import {ReferenceComponent} from './components/resume-form/reference.component';
import {ResumeRepoService} from '../core/repositry/resumeRepo.service';

@NgModule({
  declarations: [
    UserDashboardComponent,
    OnboardingComponent,
    EmailVerificationComponent,
    OnboardingIntroComponent,
    ResumeNameComponent,
    UploadComponent,
    ImageUploadComponent,
    UploadFromDiskComponent,
    ImportVideoComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    EducationComponent,
    EmploymentHistoryComponent,
    InterestComponent,
    SkillComponent,
    LanguagesComponent,
    IndustrialExposureComponent,
    AwardsComponent,
    ObjectivesComponent,
    ReferenceComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userRootReducer)
  ],
  entryComponents: [],
  providers: [ResumeService, EmailVerificationGuard, OnboardGuard,ResumeRepoService]
})
export class UserModule {
}
