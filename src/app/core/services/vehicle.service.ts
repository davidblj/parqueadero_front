import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "../../utils/models/vehicle.interface";
import {Observable} from "rxjs";
import { Bill } from '../../utils/models/bill.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = 'parqueadero/vehiculos';

  constructor(private http: HttpClient) {}

  add(vehicle: Vehicle): Observable<any> {
    return this.http.post(this.baseUrl, vehicle);
  }

  // pipe the value to return the vehicles !
  list(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  delete(id: string) {
    return this.http.delete<Bill>(`${this.baseUrl}/${id}`);
  }
}
