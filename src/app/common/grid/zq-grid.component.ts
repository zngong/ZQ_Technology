import { Component,Input,Output,OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';
import { ModalService } from '../modal/modal.service';
import { ConfirmConfig } from '../modal/modal-config';



@Component({
  selector: 'zq-grid',
  template:`
  <div style="height:100%">
      <div [ngStyle]="style">
          <ag-grid-angular style="width: 100%; height: 100%;" class="ag-fresh"
          [gridOptions]="gridOption"
          [showToolPanel]="showToolPanel"
          enableColResize
          enableSorting
          enableFilter
          rowHeight="22"
          (gridReady)="onGridReady($event)"
          (columnValueChanged)="onColumnValueChanged($event)"
          rowSelection="multiple">
        </ag-grid-angular>
    </div>
    <div class='pagitionContainer' *ngIf="gridOption.pagination">
        <div class="fl">
          <button class="firstPageBtn" (click)="goToFirst()"><i class="anticon anticon-step-backward"></i></button>
          <button class="firstPageBtn" (click)="goToPrevious()"><i class="anticon anticon-caret-left"></i></button>
        </div>
        <div  class="fl">
          <a class="pageNum" [ngClass]="{'currentPage':currentPageNum == pageNum}" *ngFor="let pageNum of pageNumList" (click)="goToPage(pageNum)">{{pageNum}}</a>
        </div>
        <div  class="fl">
          <button class="lastPageBtn" (click)="goToNext()"><i class="anticon anticon-caret-right"></i></button>
          <button class="lastPageBtn" (click)="goToLast()"><i class="anticon anticon-step-forward"></i></button>
        </div>
        <div class="fl targrtPge">
        <span  class="fl">Go To</span>
        <input type="nuber"  class="fl" [(ngModel)]="targetNum">
        <span  class="fl">/{{totalPage}}</span>
        <button  class="fl"><i class="anticon anticon-arrow-right" (click)="goToPage(targetNum)"></i></button>
        </div>
        <div class="fl pageSizeOption">
          <zq-select-search [optionstyle]="optionsStyle" (selectCallBack)="getPageSize($event)" [placeholder]="'choose option'" [selectArry]="pageSizeOption"></zq-select-search>
          <span class="fr">items per page</span>
        </div>    
    </div>
  </div>
 
` ,
styleUrls: ['./zq-grid.component.css'],
})
export class ZqGridComponent implements OnInit{
    @Input()gridOption;
    pageNumList;
    currentPageNum;
    totalPage;
    targetNum;
    pageSizeOption;
    selectedOption;
    style = {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box'
  };
  optionsStyle = {
    width:'50px',
  }
    constructor(public modalService:ModalService) {
     
    }
    ngOnInit(){
      this.pageSizeOption = [
        { value: 10, label: '10' },
        { value: 15, label: '15' },
        { value: 20, label: '20' },
        { value: 25, label: '25' },
        { value: 30, label: '30' },
        { value: 35, label: '35' }
      ]
      var columns = [] 
      var index = {
        headerName: '序号',
        field: 'no',
        width: 45,
        pinned: 'left',
        cellRenderer: function(params) {
          var index = params.node.id*1 + 1
          return index.toString();
        },
        cellStyle: function(params) {
          return {'text-align': 'center'};
        }
      }
      var select = {
        headerName: '',
        field: 'checkBox',
        width: 18,
        pinned: 'left',
        headerCheckboxSelection: true,
        checkboxSelection: true
      }
      if(this.gridOption.gridSelect){
        columns = [index,select];
      } else{
        columns = [index];
      }
      this.gridOption.columnDefs = columns.concat(this.gridOption.columnDefs);
      
    }
    
    //第一页
    goToFirst() {
      this.gridOption.api.paginationGoToFirstPage();
      this.onGridReady("other");
    }
    //最后一页
    goToLast() {
      this.gridOption.api.paginationGoToLastPage();
      this.onGridReady("other");
    }
    //下一页
    goToNext() {
      this.gridOption.api.paginationGoToNextPage();
      this.onGridReady("next");
    }
    //上一页
    goToPrevious() {
      this.gridOption.api.paginationGoToPreviousPage();
      this.onGridReady("previous");
    }
    //去某一页
    goToPage(pageNum) {
      this.gridOption.api.paginationGoToPage(parseInt(pageNum)-1);
      this.onGridReady("other");
    }
    //表格加载完成的时候初始化分页，或者重新绘画分页
    onGridReady(params) {
      if(params.type == "gridReady" || params.type == "initPage"){
        this.pageNumList= [];
      }
      this.totalPage = this.gridOption.api.paginationGetTotalPages();
      this.currentPageNum = this.gridOption.api.paginationGetCurrentPage()+1;
      console.log("======totalPage=======",this.gridOption)
      if(this.pageNumList.indexOf(this.currentPageNum)==-1){
        var value = this.currentPageNum%5;
         if(params == "next" || params.type == "gridReady" || params.type == "initPage"){//如果是下一页、修改pageSize或者表格刚初始化完成的时候
            if(params == "next"){
              this.pageNumList.splice(0,1);
              this.pageNumList.push(this.currentPageNum);
            }else{
              for(let i=this.currentPageNum - value+1;(i<=this.currentPageNum - value+5 && i<=this.totalPage);i++){
                this.pageNumList.push(i);    
              }
            }
         }else if(params == "previous"){//上一页
           this.pageNumList.splice(4,1);
           this.pageNumList.unshift(this.currentPageNum);    
         }else{//其它 （第一页，最后一页，某一页）
           this.pageNumList = [];
           if(this.currentPageNum == 1){
            this.pageNumList = [1,2,3,4,5];
           }else{
            for(let i=this.currentPageNum - 4;(i>this.currentPageNum - 5 && i<=this.totalPage);i++){
              this.pageNumList.push(i);    
            }
           }
         }
      } 
    }
    onColumnValueChanged(event){
      console.log("======数据发生改变=======")
    }
    //获取pageSize
    getPageSize(event){
      this.targetNum = '';
      this.gridOption.api.paginationSetPageSize(event.value)
      this.totalPage = this.gridOption.api.paginationGetTotalPages();
      this.onGridReady({type:"initPage"})
    }
    doExport(){
      var params = {
        skipHeader: false,
        columnGroups: true,
        skipFooters: false,
        skipGroups: false,
        skipPinnedTop:false,
        skipPinnedBottom: false,
        allColumns: false,
        onlySelected: false,
        fileName: this.gridOption.fileName
      };
      this.gridOption.api.exportDataAsExcel(params);
    }
    doDelete(param){
      console.log("=====表格数据改变======",param)
    }
  
   
}