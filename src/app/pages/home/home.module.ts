import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../../share/share.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
