import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {HomeService} from '../../../services/home.service'
import {SingerService} from '../../../services/singer.service'
import { compileNgModule } from '@angular/compiler';
import { Banner, HotTag, SongSheet, singer } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  carouselActiveIndex = 0;
  public banner: Banner[];

  tabs: HotTag[];
  mList: SongSheet[];
  EnterSinger: singer[];
  loading = false;

  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent
  constructor(private homeServer: HomeService, private singerService: SingerService) { 
    this.getBanners()
    this.getHotTags()
    this.getPersonalizedSheetList()
    this.getSingerServiceList()
  }

  private getBanners () {
    this.homeServer.getBanners().subscribe( banners => {
      this.banner = banners
    })
  }

  private getHotTags () {
    this.homeServer.getHotTag().subscribe( tags => {
      console.log(tags)
      this.tabs = tags
    })
  }

  private getPersonalizedSheetList () {
    this.homeServer.getPerosonalSheetList().subscribe( sheets => {
      console.log(sheets)
      this.mList = sheets
    })
  }

  private getSingerServiceList () {
    this.singerService.getEnterSinger().subscribe( EnterSinger => {
      console.log(EnterSinger)
      this.EnterSinger = EnterSinger
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
