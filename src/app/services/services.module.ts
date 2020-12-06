import { NgModule, InjectionToken, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


export const API_CONFIG = new InjectionToken('ApiConfigToken')

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: API_CONFIG, useValue: 'http://localhost:3000/'}
  ]
})
export class ServicesModule { 
  constructor() { }
  
}
