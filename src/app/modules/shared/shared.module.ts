import {NgModule} from '@angular/core';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.5)',
      primaryColour: '#3169ff',
      secondaryColour: '#3169ff',
      tertiaryColour: '#3169ff',
      fullScreenBackdrop: true
    }),
    MaterialModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    LoadingModule
  ],
  declarations: [],
})

export class SharedModule {
}
