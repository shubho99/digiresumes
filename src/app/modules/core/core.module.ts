import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {getReducers, reducerToken} from '../../reducers';


@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserAnimationsModule,
  ],
  declarations: [
  ],
  providers: [    {provide: reducerToken, useFactory: getReducers},
  ]
})

export class CoreModule {
}
