
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RoleComponent }   from './role.component';
import { RoleListComponent } from './roleList.component';

/**
 * 主体路由
 */
const roleRoutes: Routes = [
  {
    path: '', component: RoleComponent,
    children: [
        {
            path:'roleList',
            component:RoleListComponent
        }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(roleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoleRoutingModule { }
