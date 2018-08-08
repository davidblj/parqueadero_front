import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interceptorProviders } from './interceptors/interceptor-providers';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import {VehicleService} from "./services/vehicle.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    VehicleService,
    interceptorProviders
  ]
})
export class CoreModule { }
