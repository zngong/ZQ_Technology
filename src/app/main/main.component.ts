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
    this.spinStatus = true;
    console.log("===event=====",event)
  }
  selectMenu (item){
    this.router.navigate([item.url]);
  }

  logout(){
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？','');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if(result == 'OK'){
        this.router.navigate(['/login']);
      }
    });
   
  }

}
