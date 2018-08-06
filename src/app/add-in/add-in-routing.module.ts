import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInComponent } from './components/add-in/add-in.component';

const routes: Routes = [
  {
    path: '',
    component: AddInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddInRoutingModule { }
