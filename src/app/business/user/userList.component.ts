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
  moreStatus:boolean;
  rowData:Array<any>;
  columnDefs:Array<any>;
  columnType;
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
    this.moreStatus = true;
    console.log("==初始化==")
    this.columnDefs =  [
      {
        headerName: 'Name',
        field: 'name',
        filter: 'text',
        width: 100,
        checkboxSelection: function (params) {
          // we put checkbox on the name if we are not doing grouping
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function (params) {
          // we put checkbox on the name if we are not doing grouping
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {
        headerName: 'Sex',
        field: 'sex',
        filter: 'text',
        width: 50,
      },
      {
        headerName: 'Age',
        field: 'age',
        filter: 'text',
        width: 50,
        marryChildren: true,
        children: [
          {headerName: 'Birthday', field: 'birthday', columnGroupShow: 'null', type: ['dateColumn', 'nonEditableColumn']},
          {headerName: 'Gold', field: 'bronze', columnGroupShow: 'null'},
          {headerName: 'Constellation', field: 'constellation', columnGroupShow: 'null'}
        ]
      },
      {
        headerName: 'Tele',
        field: 'tele',
        filter: 'text',
        width: 200,
        editable: true,
      },
      {
        headerName: 'Address',
        field: 'address',
        filter: 'text',
        width: 500,
        editable: true,
        pinned: 'right'
      }

    ];
    this.rowData =  [
      {id: 1, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
      {id: 2, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
      {id: 3, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
      {id: 4, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
      {id: 5, name: '老王', sex: '男', age: '30', birthday: '1997-07-08', tele: '13645713276', address: '中关村软件园'},
      {id: 6, name: '柜子', sex: '男', age: '35', birthday: '1999-03-15', tele: '18745016324', address: '海淀区后厂村路'},
    ]
    this.columnType = {
      'numberColumn': {width: 83, filter: 'number'},
      'medalColumn': {width: 100, columnGroupShow: 'open', suppressFilter: true},
      'nonEditableColumn': {editable: false},
      'dateColumn': {
        filter: 'date',
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            const dateParts = cellValue.split('-');
            const day = Number(dateParts[2]);
            const month = Number(dateParts[1]) - 1;
            const year = Number(dateParts[0]);
            const cellDate = new Date(year, month, day );
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      }
    };
  }
  //获取日期
  getDate(date){
    this.startDate = date.startDate;
    this.endDate = date.endDate;
  }
  //获取状态
  getStatus(status){
    this.userStatus = status.value;
    
  }
  //查询
  doQuery(event){

  }
  //重置
  doReset(event){

  }
  //更多(true)收起(false)
  doExpandMore(event){
    this.moreStatus = event;
  }


}