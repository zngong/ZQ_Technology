
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserComponent }   from './user.component';
import { UserListComponent } from './userList.component';

/**
 * 主体路由
 */
const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
        {
            path:'userList',
            component:UserListComponent
        }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
