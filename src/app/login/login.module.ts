import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginComponent }   from './login.component';
import { SpinModule } from '../common/spin/spin.module';
import { AppService } from '../app.service';
import { LoginService } from './login.service';





@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     ReactiveFormsModule,
     NgbModule,
     LoginRoutingModule,
     NgZorroAntdModule.forRoot(),
     SpinModule,
  ],
  declarations: [
     LoginComponent,
  ],
  exports:      [],
  providers:    [AppService,LoginService]
})
export class LoginModule { }
