import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoComponent } from './steps/accesso/accesso.component';

//exports: make Components accesible for other modules using this module
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AccessoComponent],
  entryComponents:[AccessoComponent],
  declarations: [AccessoComponent]
})
export class ImpressModule { }
