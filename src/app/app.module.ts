import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './containers/app.component';
import {HeaderComponent} from './containers/header.component';
import {DashboardComponent} from './containers/dashboard.component';
import {NotFoundComponent} from './components/not.found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';

import {HomeComponent} from './containers/home.component';
import {GetStartedComponent} from './containers/get.started.component';
import {LoginComponent} from './containers/login.component';
import {SafeUrlPipe} from './pipes/safeUrl';
import {TruncatePipe} from './pipes/truncate';
import {ContactUsComponent} from './containers/contact.us.component';
import {VideoDialogComponent} from './components/video.dialog.component';
import {MaterialModule} from './material.module';


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
    SafeUrlPipe,
    TruncatePipe,
    VideoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AnimateOnScrollModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [VideoDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
