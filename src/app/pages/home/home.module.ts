import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../../share/share.module';
import { ViewComponent } from './view/view.component';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import {PlayCountPipe} from "../../share/play-count.pipe";
import { MemberCardComponent } from './components/member-card/member-card.component'

@NgModule({
  declarations: [ViewComponent, WyCarouselComponent, PlayCountPipe, MemberCardComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
