import { AlertifyService } from './services/alertify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctors/doctor/doctor.component';
import { DoctorFormComponent } from './doctors/doctor-form/doctor-form.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorFormComponent,
    DoctorDetailComponent,
    UpdateDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
