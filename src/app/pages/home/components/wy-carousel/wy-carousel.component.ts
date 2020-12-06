import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @ViewChild('dot', {static: true}) dotRef: TemplateRef<any>
  @Input() activeIndex = 0;
  @Output() changeSlideHandle = new EventEmitter<string>()
  
  constructor() { }

  onChangeSlideHandle(type: string) {
    this.changeSlideHandle.emit(type)
  }

  ngOnInit(): void {
  }

}
