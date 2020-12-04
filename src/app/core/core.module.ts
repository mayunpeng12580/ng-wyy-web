import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    PagesModule,
    ShareModule
  ],
  exports: [
    ShareModule
  ]
})
export class CoreModule { }
