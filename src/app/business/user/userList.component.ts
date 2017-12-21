import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UserListService } from './userList.service';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'zq-user-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {


  constructor(private router: Router,private msgService:NzMessageService) {
   
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }



}