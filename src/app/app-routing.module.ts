import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dashboard/admin', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: 'clinics', loadChildren: () => import('./clinics/clinics.module').then(m => m.ClinicsModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
