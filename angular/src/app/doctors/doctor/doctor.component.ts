import { DoctorServiceService } from './../../services/doctor-service.service';
import { Doctor } from './../../shared/models/doctor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctorsList();
  }

  getDoctorsList() {
    this.doctorService.getAll().subscribe((data: Doctor[]) => {
      this.doctors = data;
    })
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe( data => {
      console.log(data);
      this.getDoctorsList();
    }, error => {
      console.log(error);
    })
  }

  updateDoctor(id: number) {
    this.router.navigate(["/doctors/update", id]);
  }

}
