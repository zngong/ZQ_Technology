import { Component, OnInit, ElementRef} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalService } from '../common/modal/modal.service';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmConfig } from '../common/modal/modal-config';
import { MainService } from './main.service';
import { AppReuseStrategy } from '../common/routeReuse/routeReuseStrategy';

@Component({
  selector: 'zq-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[AppReuseStrategy]
})
export class MainComponent implements OnInit {
  isCollapsed = false;//默认展开菜单
  spinStatus:boolean = false;
  menuData:Array<any>;
  seleceTabIndex:Number;
  currentTab;
  tabArray:Array<any> = [];
  constructor(private router:Router,private modalService:ModalService,private mainService:MainService,
     private appReuseStrategy: AppReuseStrategy) {
        
   }
  //菜单初始化
  ngOnInit() {
    this.mainService.getMenu().then((data)=>{
      this.menuData = data.menuData;
    },(error)=>{
      console.log(error)
    });
    if(this.tabArray.length == 0){
      this.router.navigate(['main']);
    }
  }
  //点击页签(跟选中左侧菜单一致)
  clickTag(event){
    this.selectMenu(event);
  }
  //左侧菜单选中
  selectMenu (item){
    var obj = this;
    var flag = this.mainService.arrayRemoveRepet(this.tabArray,'id',item.id);
    if(flag != 'error'){
      if(flag == -1){
        this.tabArray.push(item);
        this.mainService.tabList = this.tabArray;
        this.tabArray = this.tabArray.filter((element,index)=>{
          if(element.id == item.id){
            element.index = index;
            element.select = true;
            this.currentTab = element;
            this.router.navigate([item.url]);
            this.leftMenuClass(element,index)
          }else{
            element.select = false;
          }
          return element;
        })
      }else{
        this.tabArray = this.tabArray.filter((element,index)=>{
          if(element.id == item.id){
            element.select = true;
            this.currentTab = element;
            this.leftMenuClass(element,index)
          }else{
            element.select = false;
          }
          return element;
        })
        this.router.navigate([item.url]);
        
      }
    }
  }
  //选择页签后的回调
  tagSelect(tab){
    
  }
  //关闭页签的回调
  closeTab(param){
    var index = param.index;
    this.tabArray.splice(index, 1);
    var tab= param.tab;
    if(this.tabArray.length == 0){
      this.router.navigate(['main']);
      this.leftMenuClass(tab,-1);
    }else{
      if(index > 0){
        this.router.navigate([this.tabArray[index-1].url]);
        this.tabArray[index-1].select = true;
        this.leftMenuClass(tab,index-1);
      }else{
        this.router.navigate([this.tabArray[0].url]);
        this.tabArray[0].select = true;
        this.leftMenuClass(tab,0);
      }
      
    }
    this.mainService.tabList = this.tabArray;
    // this.appReuseStrategy.deleteReuseRoute(param.tab.keyWord)
  }
  //左侧菜单样式控制
  leftMenuClass(tab,index){
    var arr = document.getElementsByName("leftMenu");
    if(tab.select == true){
      for(let i = 0;i<arr.length;i++){
        if(arr[i].classList.length == 2){
          arr[i].classList.remove("ant-menu-item-selected");
        }
        if(index !== '' && this.tabArray.length > 0){
          if(arr[i].innerText == this.tabArray[index].name){
            arr[i].classList.add("ant-menu-item-selected");
          }
        }
      }
     }
  }
  //退出登录
  logout(){
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？','');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if(result == 'OK'){
        this.router.navigate(['/login']);
      }
    });
  }

}
