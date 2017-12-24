import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ZqDatePickerComponent } from './date.component';





@NgModule({
  imports:      [
     CommonModule, 
     NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    ZqDatePickerComponent
  ],
  exports:      [ZqDatePickerComponent],
  providers:    []
})
export class DateModule { }
