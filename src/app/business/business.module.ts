import { NgModule } from "@angular/core";
import { CommonModule }       from '@angular/common';
import { DateModule } from "../common/date/date.module";
import { BusinessRoutingModule } from "./business-routing.module";
import { BusinessComponent } from "./business.component";
import { UserService } from "./user/user.service";
/**
 * 路由复用
 */
import { RouterModule ,RouteReuseStrategy} from "@angular/router";
import { SimpleReuseStrategy } from '../common/routeReuse/routeReuseStrategy';
/**
 * 公共组件
 */
import { NgZorroAntdModule } from 'ng-zorro-antd';
/**
 * 业务组件
 */
import { UserListComponent } from "./user/userList.component";
import { RoleListComponent } from "./role/roleList.component";


@NgModule({
    imports:[
        RouterModule,
        BusinessRoutingModule,
        // DateModule
    ],
    declarations:[
        BusinessComponent,
        UserListComponent,
        RoleListComponent,
    ],
    exports:[],
    providers:[UserService, { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }],
})
export class BusinessModule {}