import { Component,Input,Output,OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';

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
` 
})
export class ZqGridComponent implements OnInit{
    @Input()gridRowData;
    @Input()gridColumnDefs;
    @Input()gridColumnType;
    @Input()gridPagination;
    private gridOptions: GridOptions;
    constructor() {
        this.gridOptions = <GridOptions>{
            
          };
      
    }
    ngOnInit(){
        setTimeout(_=>{
            this.gridOptions.pagination = this.gridPagination
            this.gridOptions.columnDefs = this.gridColumnDefs;
            this.gridOptions.rowData = this.gridRowData;
            this.gridOptions.columnTypes = this.gridColumnType;
            console.log("====gridRowData====",this.gridRowData);
            console.log("====gridColumnDefs====",this.gridColumnDefs)
            console.log("====gridColumnType====",this.gridColumnType)
            console.log("====gridPagination====",this.gridPagination)
        },200)
    }
}