import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClinicsComponent } from '../clinics/clinics.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { PatientsComponent } from '../patients/patients.component';
import { AppointmentsComponent } from '../appointments/appointments.component';


@NgModule({
  declarations: [
    // DashboardComponent,
    ClinicsComponent,
    DoctorsComponent,
    PatientsComponent,
    AppointmentsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
