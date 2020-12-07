import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';


//引入UI组件
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import {WyUiModule} from "./wy-ui/wy-ui.module"
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
    NzTabsModule,
    NzIconModule,
    NzMenuModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzCarouselModule,
    NzCardModule,
    WyUiModule,
    NzListModule,
    
  ],
  exports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
    NzTabsModule,
    NzIconModule,
    NzMenuModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzCarouselModule,
    NzCardModule,
    WyUiModule,
    NzListModule,
    
  ]
})
export class ShareModule { }
