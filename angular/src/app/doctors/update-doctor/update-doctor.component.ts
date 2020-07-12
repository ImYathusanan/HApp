import { Doctor } from './../../shared/models/doctor';
import { DoctorServiceService } from './../../services/doctor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  id: number;
  doctor: Doctor;

  constructor(private doctorService: DoctorServiceService,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getDoctor(this.id);

  }

  getDoctor(id: number) {
    this.doctorService.getById(id).subscribe((data: Doctor) => {
      this.doctor = data;
    }, error => {
      console.log(error);
    })
  }

  updateDoctor() {
    this.doctorService.updateDoctor(this.id, this.doctor).subscribe(data => {
      console.log(data);
      this.getAllDoctors();
    }, error => {
      console.log(error);
    })
  }

  getAllDoctors() {
    this.router.navigate["/doctors/list"];
  }


}
