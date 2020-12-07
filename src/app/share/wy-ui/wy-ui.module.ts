import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { WyPlayerModule } from './wy-player/wy-player.module';
import { WySliderTrackComponent } from './wy-slider-track/wy-slider-track.component';



@NgModule({
  declarations: [SingleSheetComponent],
  imports: [
    CommonModule,
    WyPlayerModule
  ],
  exports: [WyPlayerModule]
})
export class WyUiModule { }
