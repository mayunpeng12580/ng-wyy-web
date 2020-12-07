import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { WyPlayerModule } from './wy-player/wy-player.module';



@NgModule({
  declarations: [SingleSheetComponent],
  imports: [
    CommonModule,
    WyPlayerModule
  ],
  exports: [WyPlayerModule]
})
export class WyUiModule { }
