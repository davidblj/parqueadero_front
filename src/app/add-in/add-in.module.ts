import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInRoutingModule } from './add-in-routing.module';
import { AddInComponent } from './components/add-in/add-in.component'

@NgModule({
  imports: [
    CommonModule,
    AddInRoutingModule
  ],
  exports: [
    AddInComponent
  ],
  declarations: [
    AddInComponent
  ]
})
export class AddInModule { }
