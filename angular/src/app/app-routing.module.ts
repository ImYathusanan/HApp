import { DoctorFormComponent } from './doctors/doctor-form/doctor-form.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctors/doctor/doctor.component';


const routes: Routes = [
  { path: "", component: DoctorComponent },
  { path: "doctors/create", component: DoctorFormComponent },
  { path: "doctors/list", component: DoctorComponent },
  { path: "doctors/details/:id", component: DoctorDetailComponent },
  { path: "doctors/update/:id", component: UpdateDoctorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
