
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router , RouteReuseStrategy} from '@angular/router';
import { MainComponent }   from './main.component';
import { MainLoginAuth } from './main.loginAuth';

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
      { path: 'user', loadChildren: 'app/business/business.module#BusinessModule',canActivate: [ MainLoginAuth ],data:{key:"user"}},
      { path: 'role', loadChildren: 'app/business/business.module#BusinessModule',canActivate: [ MainLoginAuth ],data:{key:"role"} },
      { path: 'right', loadChildren: 'app/business/business.module#BusinessModule',canActivate: [ MainLoginAuth ],data:{key:"right"}}
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
