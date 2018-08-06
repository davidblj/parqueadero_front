import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInRoutingModule } from './add-in-routing.module';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';

import { AddInComponent } from './components/add-in/add-in.component';
import { AddInFormContainerComponent } from './containers/add-in-form-container/add-in-form-container.component';
import { AddInFormComponent } from './components/add-in-form/add-in-form.component';
import { AddInFormFieldComponent } from './components/add-in-form-field/add-in-form-field.component';
import { AddInVehicleComponent } from './components/add-in-vehicle/add-in-vehicle.component';
import { AddInSendComponent } from './components/add-in-send/add-in-send.component';
import { AddInStatusComponent } from './components/add-in-status/add-in-status.component'

@NgModule({
  imports: [
    CommonModule,
    AddInRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AddInComponent
  ],
  declarations: [
    AddInComponent,
    AddInFormContainerComponent,
    AddInFormComponent,
    AddInFormFieldComponent,
    AddInVehicleComponent,
    AddInSendComponent,
    AddInStatusComponent
  ]
})
export class AddInModule { }
