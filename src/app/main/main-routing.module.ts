
import { NgModule, OnInit } from '@angular/core';
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
      { path: 'main', loadChildren: 'app/main/main.module#MainModule' },
      // { path: 'home', loadChildren: 'app/business/home/home.module#HomeModule' },
      // { path: 'demo', loadChildren: 'app/business/demo/demo.module#DemoModule' },
      // { path: 'user', loadChildren: 'app/business/user/user.module#UserModule' },
      // { path: 'role', loadChildren: 'app/business/role/role.module#RoleModule' },
      // { path: 'nofind', loadChildren: 'app/business/nofind/nofind.module#NofindModule' }
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
