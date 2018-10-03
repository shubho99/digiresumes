import {NgModule} from '@angular/core';


import {AppComponent} from './containers/app.component';
import {HeaderComponent} from './containers/header.component';
import {DashboardComponent} from './containers/dashboard.component';
import {NotFoundComponent} from './components/not.found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {FlexLayoutModule} from '@angular/flex-layout';

import {HomeComponent} from './containers/home.component';
import {GetStartedComponent} from './containers/get.started.component';
import {LoginComponent} from './containers/login.component';
import {TruncatePipe} from './pipes/truncate';
import {ContactUsComponent} from './containers/contact.us.component';
import {VideoDialogComponent} from './components/video.dialog.component';
import {MaterialModule} from './material.module';
import {CoreModule} from './modules/core/core.module';
import {AuthGuard} from './modules/core/guards/auth-guard';
import {AnonGuard} from './modules/core/guards/anon-guard';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './modules/core/services/auth.service';
import {ApiService} from './modules/core/services/api.service';
import {AlertService} from './modules/core/services/alert.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducerToken} from './reducers';
import {AuthRepoService} from './modules/core/repositry/authRepo.service';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {LogoutComponent} from './containers/logout.component';
import {PasswordResetComponent} from './containers/password-reset.component';
import {SharedModule} from './modules/shared/shared.module';
import {ResumeRepoService} from './modules/core/repositry/resumeRepo.service';
import {ResumeService} from './modules/core/services/resume.service';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {DisclaimerComponent} from './modules/user/dialogues/disclaimer.component';
import {PrivacyPolicyComponent} from './modules/user/dialogues/privacy-policy.component';
import {AboutUsComponent} from './containers/about-us.component';
import {AdsenseModule} from 'ng2-adsense';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NotFoundComponent,
    HomeComponent,
    GetStartedComponent,
    ContactUsComponent,
    LoginComponent,
    TruncatePipe,
    VideoDialogComponent,
    LogoutComponent,
    PasswordResetComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'resume-builder'}),
    BrowserTransferStateModule,
    CoreModule,
    SharedModule,
    RouterModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    StoreModule.forRoot(reducerToken),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.cubeGrid,
      backdropBackgroundColour: 'rgba(135, 176, 213, 0.2)',
      primaryColour: '#538ec3',
      secondaryColour: '#538ec3',
      tertiaryColour: '#538ec3',
      fullScreenBackdrop: true
    }),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [VideoDialogComponent, DisclaimerComponent, PrivacyPolicyComponent
  ],
  providers: [
    AuthGuard,
    AnonGuard,
    ApiService,
    AuthService,
    AlertService,
    AuthRepoService,
    ResumeRepoService,
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
