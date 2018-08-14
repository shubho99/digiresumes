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
import {ContactDetailsFormComponent} from './dialogues/resume-form/contact-details-form.component';
import {EducationFormComponent} from './dialogues/resume-form/education-form.component';
import {EmploymentHistoryFormComponent} from './dialogues/resume-form/employment-history-form.component';
import {InterestFormComponent} from './dialogues/resume-form/interest-form.component';
import {SkillFormComponent} from './dialogues/resume-form/skill-form.component';
import {LanguagesFormComponent} from './dialogues/resume-form/languages-form.component';
import {IndustrialExposureFormComponent} from './dialogues/resume-form/industrial-exposure-form.component';
import {AwardsFormComponent} from './dialogues/resume-form/awards-form.component';
import {ObjectivesFormComponent} from './dialogues/resume-form/objectives-form.component';
import {ReferenceFormComponent} from './dialogues/resume-form/reference-form.component';
import {ResumeRepoService} from '../core/repositry/resumeRepo.service';
import {ContactDetailsComponent} from './components/resume-form/contact-details.component';
import {SkillsComponent} from './components/resume-form/skills.component';
import {SkillsCardComponent} from './components/cards/skills-card.component';

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
    ContactDetailsFormComponent,
    EducationFormComponent,
    EmploymentHistoryFormComponent,
    InterestFormComponent,
    SkillFormComponent,
    LanguagesFormComponent,
    IndustrialExposureFormComponent,
    AwardsFormComponent,
    ObjectivesFormComponent,
    ReferenceFormComponent,
    ContactDetailsComponent,
    SkillsComponent,
    SkillsCardComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userRootReducer)
  ],
  entryComponents: [ContactDetailsFormComponent, SkillFormComponent],
  providers: [ResumeService, EmailVerificationGuard, OnboardGuard, ResumeRepoService]
})
export class UserModule {
}
