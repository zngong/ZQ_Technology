
import { CommonModule }       from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ZqSearchButtonComponent } from './zq-search-btn.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ZqSearchButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  exports:[ZqSearchButtonComponent],
  providers:[DatePipe]
})
export class ZqSearchBtnModule { }
