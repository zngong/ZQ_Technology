import { Component,Input,Output,OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';
import { ConfirmConfig } from '../modal/modal-config';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'zq-grid',
  template:`
  <ag-grid-angular style="width: 100%; height: 250px;" class="ag-fresh"
  [gridOptions]="gridOptions"
  [columnDefs]="columnDefs"
  [showToolPanel]="showToolPanel"
  [rowData]="rowData"
  enableColResize
  enableSorting
  enableFilter
  rowHeight="22"
  rowSelection="multiple">
</ag-grid-angular>
` ,
styleUrls: ['./zq-grid.component.css']
})
export class ZqGridComponent implements OnInit{
    @Input()gridRowData;
    @Input()gridColumnDefs;
    @Input()gridColumnType;
    @Input()gridPagination;
    private gridOptions: GridOptions;
    constructor(private modalService:ModalService) {
        this.gridOptions = <GridOptions>{
            pagination:true
        };
        // setTimeout(_=>{
        //     this.gridOptions.pagination = this.gridPagination
        //     this.gridOptions.columnDefs = this.gridColumnDefs;
        //     this.gridOptions.rowData = this.gridRowData;
        //     this.gridOptions.columnTypes = this.gridColumnType;
        //     console.log("====gridOptions====",this.gridOptions);
        // },200)
        this.gridOptions.columnDefs =  [
            {

                headerName: '#',
                width: 30,
                checkboxSelection: true,
                suppressSorting: true,
                suppressMenu: true,
                pinned: 'left',
            //   headerName: '',
            //   field: 'checkBox',
            //   width: 20,
              
            //   checkboxSelection: function (params) {
            //     // we put checkbox on the name if we are not doing grouping
            //     return params.columnApi.getRowGroupColumns().length === 0;
            //   },
            //   headerCheckboxSelection: function (params) {
            //     // we put checkbox on the name if we are not doing grouping
            //     return params.columnApi.getRowGroupColumns().length === 0;
            //   }
            },
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
            // <i class="anticon anticon-browse ml10" style="margin-left:10px;"></i>
          ];
          this.gridOptions.rowData =  [
            {id: 1, name: '张三', sex: '女', age: '20', birthday: '1993-05-20', tele: '13564569874', address: '海淀区农大南路'},
            {id: 2, name: '李四', sex: '男', age: '40', birthday: '1992-08-18', tele: '15647893214', address: '丰台区'},
            {id: 3, name: '小明', sex: '男', age: '20', birthday: '2011-02-01', tele: '17788770858', address: '哈尔滨市南岗区'},
            {id: 4, name: '晓红', sex: '女', age: '25', birthday: '1978-11-20', tele: '18945620145', address: '北京西路的日子'},
            {id: 5, name: '老王', sex: '男', age: '30', birthday: '1997-07-08', tele: '13645713276', address: '中关村软件园'},
            {id: 6, name: '柜子', sex: '男', age: '35', birthday: '1999-03-15', tele: '18745016324', address: '海淀区后厂村路'},
          ]
          this.gridOptions.columnTypes = {
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
    ngOnInit(){
       
    }
   operateCellRenderer(params) {
        const html = '<div class="zq-grid-row-btns" >'+
                        '<i class="anticon anticon-plus-square-o ml10" title="新增"></i>'+
                        '<i class="anticon anticon-edit ml10" title="修改"></i>'+
                        '<i class="anticon anticon-delete ml10" title="删除" (click)="doDelete(params)"></i>'+
                     '</div>'
        return html;
    }
    doDelete(event){
        let exitSysCfg = new ConfirmConfig('您确定删除该用户吗？','');
        this.modalService.confirm(exitSysCfg).then((result) => {
          if(result == 'OK'){
             console.log("=====执行删除操作======")
          }
        });
    }
}