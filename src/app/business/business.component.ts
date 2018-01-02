import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'zq-business',
  template: '<router-outlet></router-outlet>',
})
export class BusinessComponent {
 //路由列表
 menuList: Array<{ title: string, module: string, power: string,isSelect:boolean }>=[];
   constructor() {
    
   }
}
