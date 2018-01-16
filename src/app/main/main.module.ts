import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent }   from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgZorroAntdModule ,NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import { ModalService } from '../common/modal/modal.service';
import { ZqTabsComponent } from '../common/tabs/tabs.component';
import { SpinModule } from '../common/spin/spin.module';
import { AppService } from '../app.service';
import { MainService } from './main.service';
import { CanAdminProvide } from '../../app/app.loginAuth';
/**
 * 主体模块
 */
@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     NgbModule,
     NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' }),
     SpinModule,
     MainRoutingModule,
  ],
  declarations: [
     MainComponent,
     ZqTabsComponent,
  ],
  exports:      [],
  providers:    [ModalService,AppService,MainService,CanAdminProvide,
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzTop: '5%',nzRight: '40%',nzDuration: 1500,nzMaxStack: 7,nzPauseOnHover: true,nzAnimate: true } }],
  bootstrap: [MainComponent]
})
export class MainModule {
}
