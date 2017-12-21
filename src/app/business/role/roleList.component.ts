import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'zq-user-roleList',
  templateUrl: './roleList.component.html',
  styleUrls: ['./roleList.component.css']
})
export class RoleListComponent implements OnInit {


  constructor(private router: Router,private msgService:NzMessageService) {
   
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }



}