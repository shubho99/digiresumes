import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './containers/app.component';
import {HeaderComponent} from './containers/header';
import {DashboardComponent} from './containers/dashboard';
import {NotFoundComponent} from './components/not-found';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import {routes} from './routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {HomeComponent} from './containers/home';
import {SignUpComponent} from './containers/sign-up';
import {GetStartedComponent} from './containers/get-started';
import {ContactUsComponent} from './containers/contact-us';
import {LoginComponent} from './containers/login';
import {SafeUrlPipe} from './pipes/safeUrl';
import {TruncatePipe} from './pipes/truncate';


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
