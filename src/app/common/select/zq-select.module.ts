
import { CommonModule }       from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ZqSelectSearchComponent } from './zq-select.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ZqSelectSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  exports:[ZqSelectSearchComponent],
  providers:[DatePipe]
})
export class ZqSelectModule { }
