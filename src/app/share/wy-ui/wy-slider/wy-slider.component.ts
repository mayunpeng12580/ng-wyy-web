import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Input, inject, Inject } from '@angular/core';
import { fromEvent, Observable, merge } from 'rxjs';
import { tap, pluck, map, distinctUntilChanged, takeUntil, filter } from 'rxjs/internal/operators';
import { SliderEventObserverConfig } from './wy-slider-types';
import { sliderEvent } from './wy-slider-helper';

@Component({
  selector: 'app-wy-slider',
  templateUrl: './wy-slider.component.html',
  styleUrls: ['./wy-slider.component.less'],
  // 改变css的作用域
  encapsulation:  ViewEncapsulation.None
})
export class WySliderComponent implements OnInit {
  @Input() wyVertical = false;
  private sliderDom: HTMLDivElement;

  @ViewChild('wySlider', { static: true}) private wySlider: ElementRef;
  constructor(@Inject(Document) private doc: Document) { }

  private dragStart$: Observable<number>;
  private dragMove$: Observable<number>;
  private dragEnd$: Observable<Event>;

  ngOnInit(): void {
    this.sliderDom = this.wySlider.nativeElement
    this.createDraggingObservables();
  }

  const mouse: SliderEventObserverConfig = {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup',
    filter: (e: MouseEvent) => e instanceof MouseEvent,
    pluckKey: [orientField]
  }

  const orientField = this.wyVertical ? "pageY" : "pageX";

  const touch: SliderEventObserverConfig = {
    start: 'touchstart',
    move: 'touchmove',
    end: 'touchend',
    filter: (e: TouchEvent) => e instanceof TouchEvent,
    pluckKey: ['touches', '0', orientField]
  };

  private createDraggingObservables() {

   

    ;[mouse, touch].forEach(source => {
      const {start, move, end, filter: filterFunc, pluckKey } = source;
      source.startPlucked$ = fromEvent(this.sliderDom, start).pipe(filter(filterFunc), tap(sliderEvent),
      pluck(...pluckKey),
      map((position: Number) => {
        this.findCloseValue(position)
      });

      source.end$ = fromEvent(this.doc, end);
      source.moveResolved$ = fromEvent(this.doc, move).pipe(
        filter(filterFunc), tap(sliderEvent),
        pluck(...pluckKey),
        distinctUntilChanged(),
        map((position: Number) => {
          this.findCloseValue(position)
        },
        takeUntil(source.end$);
      )
    })


    this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
    this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
    this.dragEnd$ = merge(mouse.end$, touch.end$);
  }

}
