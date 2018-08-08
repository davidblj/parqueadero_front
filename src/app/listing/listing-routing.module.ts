import { NgModule } from "../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { ListingComponent } from "./components/listing/listing.component";

const routes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListingRoutingModule { }
