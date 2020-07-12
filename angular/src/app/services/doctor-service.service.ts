import { Doctor } from './../shared/models/doctor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  endPoint = "https://localhost:44392/api/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.endPoint + "doctors");
  }

  getById(id: number) {
    return this.http.get(this.endPoint + "doctors/" + id);
  }

  createDoctor(doctor: Doctor) {
    return this.http.post(this.endPoint + "doctors", doctor);
  }

  deleteDoctor(id: number) {
    return this.http.delete(this.endPoint + "doctors/" + id);
  }

  updateDoctor(id: number, doctor: Doctor) {
    return this.http.put(this.endPoint + "doctors/" + id, doctor);
  }
}
