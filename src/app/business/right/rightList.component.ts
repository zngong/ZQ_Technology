import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'zq-right-rightList',
  templateUrl: './rightList.component.html',
  styleUrls: ['./rightList.component.css']
})
export class RightListComponent implements OnInit {


  constructor(private router: Router,private msgService:NzMessageService) {
   
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }



}