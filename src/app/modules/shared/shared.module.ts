import {NgModule} from '@angular/core';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SafeUrlPipe} from '../../pipes/safeUrl';
import {FlexAlignmentHackDirective} from '../core/directives/flex-alignment-hack';

@NgModule({
  imports: [
    LoadingModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    LoadingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SafeUrlPipe
  ],
  declarations: [
    SafeUrlPipe
  ],
})

export class SharedModule {
}
