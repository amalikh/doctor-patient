import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { ClinicsComponent } from '../clinics/clinics.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { PatientsComponent } from '../patients/patients.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'clinics', component: ClinicsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'appointments', component: AppointmentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
