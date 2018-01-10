import { CommonModule }       from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../modal/modal.service';
import { AgGridModule } from 'ag-grid-angular/main';
import { ZqGridComponent } from './zq-grid.component';


@NgModule({
  declarations: [
    ZqGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  exports:[ZqGridComponent],
  providers:[ModalService]
})
export class ZqGridModule { }