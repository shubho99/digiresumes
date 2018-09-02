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

@NgModule({
  imports: [
    LoadingModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    ShareButtonsModule.forRoot()
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
    ShareButtonsModule
  ],
  declarations: [
    SafeUrlPipe,
  ],
  providers: [
  ]
})

export class SharedModule {
}
