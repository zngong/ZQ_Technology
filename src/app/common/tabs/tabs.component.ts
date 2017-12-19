import { Component ,Output , Input ,EventEmitter} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'zq-tabs-operation',
  template: `
    <nz-tabset [nzType]="'card'">
      <nz-tab *ngFor="let tab of tabs" (nzClick)="childEvent(tab)">
        <ng-template #nzTabHeading>
          <div>
            {{tab.name}}
            <i class="anticon anticon-cross" (click)="closeTab(tab)"></i>
          </div>
        </ng-template>
      </nz-tab>
    </nz-tabset>`,
  styles  : []
})
export class ZqTabsComponent {
    @Output() clickEvents = new EventEmitter();
   
    
    tabs = [
      {
        name: 'Tab 1'
      },
      {
        name: 'Tab 2'
      },
      {
        name: 'Tab 3'
      }
    ];
  constructor(private messageService:NzMessageService){ }
  childEvent(tab) {
    this.clickEvents.emit(tab)
  }
  closeTab(tab) {
      if(this.tabs.length == 1){
          return
      }
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
  newTab() {
    this.tabs.push({
      name: 'New Tab'
    });
  }

 
}