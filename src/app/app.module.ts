import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import { ImpressComponent } from './impress/impress.component';
//import { AccessoComponent } from './impress/steps/accesso/accesso.component';
import { ImpressModule } from './impress/impress.module'; //exports: [ImpressModule],
//import { ImpressComponent,AccessoComponent } from './impress/impress.module'; //declarations: [,ImpressComponent,AccessoComponent],

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ImpressModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
