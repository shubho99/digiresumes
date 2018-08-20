import {NgModule} from '@angular/core';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SafeUrlPipe} from '../../pipes/safeUrl';

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
  ],
  declarations: [],
})

export class SharedModule {
}
