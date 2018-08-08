import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interceptorProviders } from './interceptors/interceptor-providers';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    interceptorProviders
  ]
})
export class CoreModule { }
