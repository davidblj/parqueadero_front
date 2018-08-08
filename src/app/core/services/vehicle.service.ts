import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "../../add-in/shared/vehicle.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = 'parqueadero/vehiculos';

  constructor(private http: HttpClient) {}

  add(vehicle: Vehicle): Observable<any> {
    return this.http.post(this.baseUrl, vehicle);
  }
}
