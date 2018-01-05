
import { CommonModule }       from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ZqDatePickerComponent } from './date.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ZqDatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  exports:[ZqDatePickerComponent],
  providers:[DatePipe]
})
export class DatePickerModule { }
