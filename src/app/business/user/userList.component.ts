import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule }       from '@angular/common';
import {NzMessageService} from 'ng-zorro-antd';
import { ZqGridComponent } from '../../common/grid/zq-grid.component'
import * as moment from 'moment';
import {GridOptions} from 'ag-grid';
import { ModalService } from '../../common/modal/modal.service';
import { ConfirmConfig } from '../../common/modal/modal-config';



@Component({
  selector: 'zq-user-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('myGrid') private myChild: ZqGridComponent;
  startDate:"";
  endDate:"";
  userStatus;
  statusList:Array<any>;
  moreStatus:boolean;
  rowData:Array<any>;
  columnDefs:Array<any>;
  columnType;
  optionsStyle = {
    width:'100px',
  }
  private gridOption: GridOptions;
  constructor(private router: Router,private msgService:NzMessageService,public modalService:ModalService) {
       
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
    this.initGrid();
   
  }
  initGrid(){
    this.gridOption = <GridOptions>{
      pagination:true,
      suppressPaginationPanel:true,
      gridSelect:true,
      animateRows:true
    };
    this.gridOption.columnDefs =  [
        {
            headerName: '姓名',
            field: 'name',
            filter: 'text',
            width: 100,
            pinned: 'left',
          },
        {
          headerName: '性别',
          field: 'sex',
          filter: 'text',
          width: 50,
        },
        {
          headerName: '年龄',
          field: 'age',
          filter: 'text',
          width: 50,
          marryChildren: true,
          children: [
            {headerName: '出生年月', field: 'birthday', columnGroupShow: 'null', type: ['dateColumn', 'nonEditableColumn']},
            {headerName: 'Gold', field: 'bronze', columnGroupShow: 'null'},
            {headerName: 'Constellation', field: 'constellation', columnGroupShow: 'null'}
          ]
        },
        {
          headerName: '电话',
          field: 'tele',
          filter: 'text',
          width: 200,
          editable: true,
        },
        {
          headerName: '地址',
          field: 'address',
          filter: 'text',
          width: 400,
          editable: true,
        },
        {
          headerName: '操作',
          field: 'operat',
          width: 300,
          pinned: 'right',
          cellRenderer:this.operateCellRenderer,
        }
      ];
      this.gridOption.rowData =  [
        {id: 1, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
        {id: 2, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
        {id: 3, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
        {id: 4, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
        {id: 5, name: '老王', sex: '男', age: '30', birthday: '1997-07-08', tele: '13645713276', address: '中关村软件园'},
        {id: 6, name: '柜子', sex: '男', age: '35', birthday: '1999-03-15', tele: '18745016324', address: '海淀区后厂村路'},
        {id: 7, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
        {id: 7, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
        {id: 9, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
        {id: 10, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
        {id: 11, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
        {id: 12, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
        {id: 13, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
        {id: 14, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
        {id: 15, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
        {id: 16, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
        {id: 17, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
        {id: 18, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
        {id: 19, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
        {id: 20, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
        {id: 21, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
        {id: 22, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
        {id: 23, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
        {id: 24, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
        {id: 25, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
        {id: 26, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
      ]
      this.gridOption.columnTypes = {
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
  //表格操作列渲染
  operateCellRenderer(params) {
    var eSpan = document.createElement('div');
    eSpan.setAttribute('class','zq-grid-row-btns');
    eSpan.innerHTML =`<i class="anticon anticon-plus-square-o ml10" title="新增"></i>
                      <i class="anticon anticon-edit ml10" title="修改"></i>
                      <i class="anticon anticon-delete ml10" title="删除"></i>`;
    var nodeList = eSpan.childNodes;
    var lastNode = nodeList[nodeList.length-1]  
    lastNode.addEventListener('click', function () {
      this.doDelete(params)
    });
    return eSpan;
}
//删除操作
doDelete(event){
  let exitSysCfg = new ConfirmConfig('您确定删除该用户吗？','');
  this.modalService.confirm(exitSysCfg).then((result) => {
    if(result == 'OK'){
      console.log("=====执行删除操作======")
    }
  });
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