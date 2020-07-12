import { IDoctor } from './../../shared/models/doctor';
import { DoctorServiceService } from './../../services/doctor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  id: number;
  name: string;

  constructor(private doctorService: DoctorServiceService) { }

  ngOnInit(): void {

    this.doctorService.getById(1).subscribe((data: IDoctor) => {
      this.id = data.id;
      this.name = data.name;
    })
  }

}
