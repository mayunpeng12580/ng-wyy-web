import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { WySliderStyle } from './wy-slider-types';

@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderTrackComponent implements OnInit, OnChanges {
  @Input() wyVertical = false;
  @Input() wyLength: number;

  style: WySliderStyle = {}
  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes['wyOffset']) {
      if (this.wyVertical) {
        this.style.height = this.wyLength + '%';
        this.style.left = null;
        this.style.width = null;
      } else {
        this.style.width = this.wyLength + '%';
        this.style.bottom = null;
        this.style.height = null;
      }
     
    }
  }

  ngOnInit(): void {
  }

}
