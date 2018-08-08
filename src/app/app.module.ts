import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,    
    NavPanelComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
