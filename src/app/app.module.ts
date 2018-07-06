import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './containers/app.component';
import {HeaderComponent} from './containers/header.component';
import {DashboardComponent} from './containers/dashboard.component';
import {NotFoundComponent} from './components/not.found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import {routes} from './routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {HomeComponent} from './containers/home.component';
import {SignUpComponent} from './containers/sign-up.component';
import {GetStartedComponent} from './containers/get.started.component';
import {LoginComponent} from './containers/login.component';
import {SafeUrlPipe} from './pipes/safeUrl';
import {TruncatePipe} from './pipes/truncate';
import {ContactUsComponent} from './containers/contact.us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NotFoundComponent,
    HomeComponent,
    SignUpComponent,
    GetStartedComponent,
    ContactUsComponent,
    LoginComponent,
    SafeUrlPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
