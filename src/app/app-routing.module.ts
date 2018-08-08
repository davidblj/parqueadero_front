import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path:  'parqueadero/vehiculos/agregar',
        loadChildren: './add-in/add-in.module#AddInModule'
    },
    {
        path:  'parqueadero/vehiculos',
        loadChildren: './listing/listing.module#ListingModule'
    },
    {
        path: '',
        redirectTo: '/parqueadero/vehiculos/agregar',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }