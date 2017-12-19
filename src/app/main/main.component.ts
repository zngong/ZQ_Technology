import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../common/modal/modal.service';
import { ConfirmConfig } from '../common/modal/modal-config';

@Component({
  selector: 'zq-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = false;//默认展开菜单
  constructor(private router:Router,private modalService:ModalService) { }

  ngOnInit() {
  }
  clickTag(event){
    console.log("===event=====",event)
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
