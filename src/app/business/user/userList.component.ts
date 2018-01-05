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
  userStatus;
  statusList:Array<any>;
  constructor(private router: Router,private msgService:NzMessageService) {
   
  }
   

  /**
  * 初始化
  */
  ngOnInit() {
    this.statusList = [
      { value: '0', label: '全部' },
      { value: '1', label: '未审核' },
      { value: '2', label: '已审核' }
    ]
  }
  //获取日期
  getDate(date){
    this.startDate = date.startDate;
    this.endDate = date.endDate;
  }
  //获取状态
  getStatus(status){
    this.userStatus = status.value;
    console.log("====status======",status.value)
  }
  //查询
  doQuery(event){

  }
  //重置
  doReset(event){

  }
  //展开收起
  doExpandMore(){

  }


}