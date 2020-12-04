import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

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
    NzDropDownModule
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
    NzDropDownModule
  ]
})
export class ShareModule { }
