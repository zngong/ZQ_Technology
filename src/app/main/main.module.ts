import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouteReuseStrategy} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppReuseStrategy } from '../common/routeReuse/routeReuseStrategy';
import { MainComponent }   from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ModalService } from '../common/modal/modal.service';
import { ZqTabsComponent } from '../common/tabs/tabs.component';
import { SpinModule } from '../common/spin/spin.module';
import { AppService } from '../app.service';
import { MainService } from './main.service';

/**
 * 主体模块
 */
@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     NgbModule,
     SpinModule,
     MainRoutingModule,
     NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
  ],
  declarations: [
     MainComponent,
     ZqTabsComponent
  ],
  exports:      [],
  providers:    [ModalService,AppService,MainService, { provide: RouteReuseStrategy, useClass: AppReuseStrategy }],
  bootstrap: [MainComponent]
})
export class MainModule {
}
