import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImpressComponent } from './impress/impress.component';
import { AccessoComponent } from './impress/steps/accesso/accesso.component';
//import { ImpressModule } from './impress/impress.module'; exports: [ImpressModule],

@NgModule({
  declarations: [
    AppComponent,ImpressComponent,AccessoComponent
  ],
  imports: [
    BrowserModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
