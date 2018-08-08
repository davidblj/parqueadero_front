import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInRoutingModule } from './add-in-routing.module';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";

import { AddInComponent } from './components/add-in/add-in.component';
import { AddInFormContainerComponent } from './containers/add-in-form-container/add-in-form-container.component';
import { AddInFormComponent } from './components/add-in-form/add-in-form.component';
import { AddInFormFieldComponent } from './components/add-in-form-field/add-in-form-field.component';
import { AddInVehicleComponent } from './components/add-in-vehicle/add-in-vehicle.component';
import { AddInSendComponent } from './components/add-in-send/add-in-send.component';
import { AddInStatusComponent } from './components/add-in-status/add-in-status.component';
import { AddInModalComponent } from './components/add-in-modal/add-in-modal.component';
import {VehicleService} from "./shared/vehicle.service";
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AddInRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  exports: [
    AddInComponent
  ],
  entryComponents: [
    AddInModalComponent
  ],
  declarations: [
    AddInComponent,
    AddInFormContainerComponent,
    AddInFormComponent,
    AddInFormFieldComponent,
    AddInVehicleComponent,
    AddInSendComponent,
    AddInStatusComponent,
    AddInModalComponent
  ],
  providers: [
    VehicleService
  ]
})
export class AddInModule { }
