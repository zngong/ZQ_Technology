import { Component } from '@angular/core';
@Component({
  selector: 'zq-root',
  template:`
     <router-outlet></router-outlet>
  `
})
export class AppComponent {
  isCollapsed = false;
}