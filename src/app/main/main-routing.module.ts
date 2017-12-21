
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MainComponent }   from './main.component';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // { path: '', loadChildren: 'app/business/role/role.module#RoleModule'  },
      // {path: '', redirectTo: 'user', pathMatch: 'full'},
      { path: 'user', loadChildren: 'app/business/user/user.module#UserModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
