import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressComponent } from './impress.component'; //imports: exports: entryComponents: ImpressComponent,
import { AccessoComponent } from './steps/accesso/accesso.component';

//exports: make Components accesible for other modules using this module
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ImpressComponent,AccessoComponent],
  entryComponents:[],
  declarations: [ImpressComponent,AccessoComponent]
})
export class ImpressModule { }
