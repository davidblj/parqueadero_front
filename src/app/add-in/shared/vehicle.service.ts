import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "./vehicle.interface";
import {catchError} from "rxjs/internal/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = 'vehiculos';

  constructor(private http: HttpClient) {}

  add(vehicle: Vehicle): Observable<any> {
    return this.http.post(this.baseUrl, vehicle);
  }
}
