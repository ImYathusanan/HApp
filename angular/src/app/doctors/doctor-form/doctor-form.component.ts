import { AlertifyService } from './../../services/alertify.service';
import { Doctor } from './../../shared/models/doctor';
import { DoctorServiceService } from './../../services/doctor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorServiceService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  save() {
    this.doctorService.createDoctor(this.doctor).subscribe(data => {
      this.doctor = new Doctor();
      this.alertify.success("Doctor Registered!");
      this.getAllDoctors();
    }, error => {
      console.log(error);
    })
  }

  getAllDoctors() {
    this.router.navigate(["doctors/list"]);
  }

}
