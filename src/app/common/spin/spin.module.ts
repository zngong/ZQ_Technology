import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ZqSpinComponent } from './spin.component'





@NgModule({
  imports:      [
     CommonModule, 
     NgZorroAntdModule,
  ],
  declarations: [
    ZqSpinComponent
  ],
  exports:      [ZqSpinComponent],
  providers:    []
})
export class SpinModule { }
