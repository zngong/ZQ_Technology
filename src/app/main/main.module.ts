import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent }   from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


/**
 * 主体模块
 */
@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     NgbModule,
     MainRoutingModule,
     NgZorroAntdModule.forRoot()
  ],
  declarations: [
     MainComponent,
  ],
  exports:      [],
  providers:    [],
  bootstrap: [MainComponent]
})
export class MainModule {
}
