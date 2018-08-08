import { Component, OnInit } from '@angular/core';
import { rootRenderNodes } from '../../../node_modules/@angular/core/src/view';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {

  addInModuleRoute = '/parqueadero/vehiculos/agregar';
  ListingModuleRoute = '/parqueadero/vehiculos';

  activatedRoute;

  constructor(private router: Router) { }

  // TODO: swap the icons depending on 
  // the current activated route
  ngOnInit() { }

  onClick(route: string) {
    this.router.navigate([route])
  } 
}
