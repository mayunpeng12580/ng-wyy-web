import {Injectable} from "@angular/core"

import {Resolve} from "@angular/router"
import { HomeService } from "../../services/home.service";
import { SingerService } from "../../services/singer.service";
import { Banner, HotTag, SongSheet, singer } from "../../services/data-types/common.types";
import { Observable, forkJoin } from "rxjs";
import { take, first } from "rxjs/internal/operators";

type HomeDataType = [Banner[], HotTag[], SongSheet[], singer[]]

@Injectable()
export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(private homeServer: HomeService, private singerService: SingerService) {}

  resolve(): Observable<HomeDataType> {
    
    return forkJoin(
      [this.homeServer.getBanners(), 
        this.homeServer.getHotTag(),
        this.homeServer.getPerosonalSheetList(), 
        this.singerService.getEnterSinger()]
        ).pipe(first());
  }
}
