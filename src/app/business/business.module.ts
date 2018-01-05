import { NgModule } from "@angular/core";
import { CommonModule }       from '@angular/common';
import { BusinessRoutingModule } from "./business-routing.module";
import { BusinessComponent } from "./business.component";

/**
 * 公共组件
 */
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DatePickerModule } from "../common/date/date.module";
// import { ZqDatePickerComponent } from '../common/date/date.component';
/**
 * 业务组件
 */
import { UserListComponent } from "./user/userList.component";
import { RoleListComponent } from "./role/roleList.component";
import { RightListComponent } from "./right/rightList.component";

/**
 * service
 */
import { BusinessService } from "./business.service";
@NgModule({
    imports:[
        CommonModule,
        BusinessRoutingModule,
        NgZorroAntdModule,
        DatePickerModule
    ],
    declarations:[
        BusinessComponent,
        UserListComponent,
        RoleListComponent,
        RightListComponent,
        // ZqDatePickerComponent
    ],
    exports:[],
    providers:[BusinessService],
    bootstrap: [BusinessComponent]
})
export class BusinessModule {}