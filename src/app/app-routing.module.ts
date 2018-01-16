import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAdminProvide } from './app.loginAuth';


/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
     path: 'login',  
     loadChildren: 'app/login/login.module#LoginModule'
  },
  { 
     path: 'main',  
     loadChildren: 'app/main/main.module#MainModule',
     canActivate: [ CanAdminProvide ],
     data:{preload:true}
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


