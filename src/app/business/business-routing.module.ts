
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

/**
 * 业务组件
 */
import { BusinessComponent }   from './business.component';
import { UserListComponent } from './user/userList.component';
import { RoleListComponent } from './role/roleList.component';

/**
 * 主体路由
 */
const businessRoutes: Routes = [
  {
    path: '', component: BusinessComponent,
    children: [
        {
            path:'userList',
            component:UserListComponent
        },
        {
            path:'roleList',
            component:RoleListComponent
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
