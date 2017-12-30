import { Component, OnInit } from '@angular/core';
import { AppReuseStrategy } from '../common/routeReuse/routeReuseStrategy';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { BusinessService } from "./business.service"


@Component({
  selector: 'zq-business',
  template: '<router-outlet></router-outlet>',
  providers:[AppReuseStrategy]
})
export class BusinessComponent {
 //路由列表
 menuList: Array<{ title: string, module: string, power: string,isSelect:boolean }>=[];
   constructor(private router: Router,private activatedRoute: ActivatedRoute, private titleService: Title,private bussinessService:BusinessService) {
     //路由事件
     this.router.events.filter(event => event instanceof NavigationEnd)
       .map(() => this.activatedRoute)
       .map(route => {
         while (route.firstChild) route = route.firstChild;
         return route;
       })
       .filter(route => route.outlet === 'primary')
       .mergeMap(route => route.data)
       .subscribe((event) => {
         //路由data的标题
         let title = event['title'];
         this.menuList.forEach(p => p.isSelect=false);
         var menu = { title: title, module: event["module"], power: event["power"], isSelect:true};
         this.titleService.setTitle(title);
         let exitMenu=this.menuList.find(info=>info.title==title);
         if(exitMenu){//如果存在，不添加，当前表示选中
           this.menuList.forEach(p => p.isSelect=p.title==title);
           return ;
         } 
         this.menuList.push(menu);
         this.bussinessService.operateTab(this.menuList);
       });
   }
}
