import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HomeResolverService } from "./home-resolve.service"
const routes: Routes = [
  {path: 'home', component: ViewComponent, data: {title: '发现'}, resolve: {homeDatas: HomeResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolverService]
})
export class HomeRoutingModule { }
