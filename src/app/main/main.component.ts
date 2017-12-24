import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../common/modal/modal.service';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmConfig } from '../common/modal/modal-config';
import { MainService } from './main.service';

@Component({
  selector: 'zq-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = false;//默认展开菜单
  spinStatus:boolean = false;
  menuData:Array<any>;
  tabArray:Array<any> = [
    // {
    //   name: 'Tab 1'
    // },
    // {
    //   name: 'Tab 2'
    // },
    // {
    //   name: 'Tab 3'
    // }
  ];
  constructor(private router:Router,private modalService:ModalService,private mainService:MainService) {
    
   }

  ngOnInit() {
    this.mainService.getMenu().then((data)=>{
      this.menuData = data.menuData;
       console.log(data)
    },(error)=>{
      console.log(error)
    });
  }
  clickTag(event){
    // this.spinStatus = true;
    console.log("===event=====",this.tabArray)
    this.router.navigate([event.url]);
  }
  selectMenu (item){
    var flag = this.mainService.arrayRemoveRepet(this.tabArray,'id',item.id);
    console.log('======menu====',flag)
    if(flag != 'error'){
      if(flag == -1){
        this.tabArray.push(item)
        this.clickTag(item)
      }else{

      }
    }
  }

  logout(){
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？','');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if(result == 'OK'){
        this.router.navigate(['/login']);
      }
    });
  }
//    //路由事件
//    this.router.events.filter(event => event instanceof NavigationEnd)
//    .map(() => this.activatedRoute)
//    .map(route => {
//      while (route.firstChild) route = route.firstChild;
//      return route;
//    })
//    .filter(route => route.outlet === 'primary')
//    .mergeMap(route => route.data)
//    .subscribe((event) => {
//      //路由data的标题
//      let title = event['title'];
//      this.menuList.forEach(p => p.isSelect=false);
//      var menu = { title: title, module: event["module"], power: event["power"], isSelect:true};
//      this.titleService.setTitle(title);
//      let exitMenu=this.menuList.find(info=>info.title==title);
//      if(exitMenu){//如果存在不添加，当前表示选中
//        this.menuList.forEach(p => p.isSelect=p.title==title);
//        return ;
//      } 
//      this.menuList.push(menu);
//    });
// }

// //关闭选项标签
// closeUrl(module:string,isSelect:boolean){
//  //当前关闭的是第几个路由
//  let index=this.menuList.findIndex(p=>p.module==module);
//  //如果只有一个不可以关闭
//  if(this.menuList.length==1) return ;

//  this.menuList=this.menuList.filter(p=>p.module!=module);
//  //删除复用
//  delete SimpleReuseStrategy.handlers[module];
//  if(!isSelect) return;
//  //显示上一个选中
//  let menu=this.menuList[index-1];
//  if(!menu) {//如果上一个没有下一个选中
//     menu=this.menuList[index+1];
//  }
//  // console.log(menu);
//  // console.log(this.menuList);
//  this.menuList.forEach(p => p.isSelect=p.module==menu.module );
//  //显示当前路由信息
//  this.router.navigate(['/'+menu.module]);
// }

}
