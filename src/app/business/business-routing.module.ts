
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

/**
 * 业务组件
 */
import { BusinessComponent }   from './business.component';
import { UserListComponent } from './user/userList.component';
import { RoleListComponent } from './role/roleList.component';
import { RightListComponent } from './right/rightList.component';


/**
 * 主体路由
 */
const businessRoutes: Routes = [
  {
    path: '', component: BusinessComponent,
    children: [
        {
            path:'userList',
            component:UserListComponent,
            data: { title: '用户列表', module: 'userList', power: "SHOW" }
        },
        {
            path:'roleList',
            component:RoleListComponent,
            data: { title: '系统日志', module: 'roleList', power: "SHOW" } ,
        },
        {
            path:'rightList',
            component:RightListComponent,
            data: { title: '权限列表', module: 'rightList', power: "SHOW" } ,
        }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(businessRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BusinessRoutingModule { }
