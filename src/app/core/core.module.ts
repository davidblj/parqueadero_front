import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interceptorProviders } from './interceptors/interceptor-providers';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    interceptorProviders
  ]
})
export class CoreModule { }
