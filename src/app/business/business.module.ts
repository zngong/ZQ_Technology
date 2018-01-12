import { NgModule } from "@angular/core";
import { CommonModule }       from '@angular/common';
import { BusinessRoutingModule } from "./business-routing.module";
import { BusinessComponent } from "./business.component";

/**
 * 公共模块
 */
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DatePickerModule } from "../common/date/date.module";
import { ZqSelectModule } from '../common/select/zq-select.module';
import { ZqSearchBtnModule } from '../common/searchButton/zq-search-btn.module'; 
import { ZqGridModule } from '../common/grid/zq-grid.module';
/**
 * 业务组件
 */
import { UserListComponent } from "./user/userList.component";
import { RoleListComponent } from "./role/roleList.component";
import { RightListComponent } from "./right/rightList.component";
import { AddUserComponent } from "./user/addUser.component"

/**
 * service
 */
import { BusinessService } from "./business.service";
import { ModalService } from '../common/modal/modal.service';

@NgModule({
    imports:[
        CommonModule,
        BusinessRoutingModule,
        NgZorroAntdModule,
        DatePickerModule,
        ZqSelectModule,
        ZqSearchBtnModule,
        ZqGridModule
    ],
    declarations:[
        BusinessComponent,
        UserListComponent,
        RoleListComponent,
        RightListComponent,
        AddUserComponent
    ],
    exports:[AddUserComponent],
    providers:[BusinessService,ModalService],
    bootstrap: [BusinessComponent]
})
export class BusinessModule {}