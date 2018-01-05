import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule }       from '@angular/common';
import {NzMessageService} from 'ng-zorro-antd';
import * as moment from 'moment';



@Component({
  selector: 'zq-user-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {
  startDate:"";
  endDate:"";
  constructor(private router: Router,private msgService:NzMessageService) {
   
  }
   

  /**
  * 初始化
  */
  ngOnInit() {

  }
  getDate(date){
    console.log("=======date======",date);  
    this.startDate = date.startDate;
    this.endDate = date.endDate;
  }


}