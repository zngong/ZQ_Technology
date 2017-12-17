import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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


