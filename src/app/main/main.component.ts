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
  constructor(private router:Router,private modalService:ModalService,private mainService:MainService,
     private el: ElementRef) {
        
   }
  //菜单初始化
  ngOnInit() {
    this.mainService.getMenu().then((data)=>{
      this.menuData = data.menuData;
       console.log(data)
    },(error)=>{
      console.log(error)
    });
    if(this.tabArray.length == 0){
      this.router.navigate(['main']);
    }
  }
  //点击页签
  clickTag(event){
    // this.spinStatus = true;
    // console.log("===event=====",this.tabArray)
    this.tagSelect(event);
    this.router.navigate([event.url]);
  }
  //左侧菜单选中
  selectMenu (item){
    var obj = this;
    var flag = this.mainService.arrayRemoveRepet(this.tabArray,'id',item.id);
    if(flag != 'error'){
      if(flag == -1){
        this.tabArray.push(item);
        this.tabArray = this.tabArray.filter((element,index)=>{
          if(element.id == item.id){
            element.index = index;
            element.select = true;
            this.currentTab = element;
            this.router.navigate([item.url]);
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
    this.router.navigate([tab.url]);
    // debugger
  }
  //关闭页签的回调
  closeTab(tab){
    
    var index = this.tabArray.indexOf(tab);
    this.tabArray.splice(index, 1);
    if(this.tabArray.length == 0){
      this.router.navigate(['main']);
      this.leftMenuClass(tab,'');
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
  }
  //左侧菜单样式控制
  leftMenuClass(tab,index){
    
    var arr = document.getElementsByName("leftMenu");
    console.log('====arr======',arr)
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
