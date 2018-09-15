import { NgModule } from '@angular/core';

import {AppComponent} from './containers/app.component';
import {AppModule} from './app.module';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule, //  <-- needed for state transfer
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
