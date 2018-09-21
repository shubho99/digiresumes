import {NgModule} from '@angular/core';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SafeUrlPipe} from '../../pipes/safeUrl';
import {FlexAlignmentHackDirective} from '../core/directives/flex-alignment-hack';
import {ClipboardModule, ClipboardService} from 'ngx-clipboard';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {FooterComponent} from './components/footer.component';
import {LayoutComponent} from './components/app-layout';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    LoadingModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    ShareButtonsModule.forRoot(),
    RouterModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    LoadingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SafeUrlPipe,
    ClipboardModule,
    ShareButtonsModule,
    FooterComponent,
    LayoutComponent
  ],
  declarations: [
    SafeUrlPipe,
    FooterComponent,
    LayoutComponent
  ],
  providers: [
  ]
})

export class SharedModule {
}
