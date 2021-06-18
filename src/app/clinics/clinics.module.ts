import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicsRoutingModule } from './clinics-routing.module';
import { ClinicsComponent } from './clinics.component';


@NgModule({
  declarations: [
    ClinicsComponent
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule
  ],
  exports:[
    ClinicsComponent
  ]
})
export class ClinicsModule { }
