import { Component, OnInit, Injectable, ViewChild, Output, EventEmitter } from '@angular/core';
import {HomeService} from '../../../services/home.service'
import {SingerService} from '../../../services/singer.service'
import { compileNgModule } from '@angular/compiler';
import { Banner, HotTag, SongSheet, singer } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, switchMap } from 'rxjs/internal/operators';
import { SheetService } from '../../../services/sheet.service';
import { Observable } from 'rxjs';
import { Song } from '../../../services/data-types/common.types';
// import {ActivatedRoute} from "../home-resolve.service"

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  @Output() onplay = new EventEmitter<number>()
  carouselActiveIndex = 0;
  public banner: Banner[];

  tabs: HotTag[];
  mList: SongSheet[];
  EnterSinger: singer[];
  loading = false;

  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent
  constructor(private homeServer: HomeService, private singerService: SingerService, private route: ActivatedRoute, private sheetService: SheetService) {
     this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, tags, sheets ,EnterSinger]) => {
      console.log(banners)
      this.banner = banners
       this.tabs = tags
       this.mList = sheets
       this.EnterSinger = EnterSinger
     })
    
  }

  getPlaySheet(id: number) {
    console.log(id)
    this.sheetService.playSheet(id).subscribe(res => {
      console.log(res)
    })
  }

  

  nzBeforeChange({to}) {
    this.carouselActiveIndex = to
  }

  changeSlideHandle(type: string){
    console.log(type)
    this.nzCarousel[type]()
  }

  ngOnInit(): void {
  }

}
