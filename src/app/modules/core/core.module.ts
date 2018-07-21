import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
  ],
  declarations: [],
  providers: []
})

export class CoreModule {
}
