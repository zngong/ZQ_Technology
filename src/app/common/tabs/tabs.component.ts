import { Component ,Output , Input ,EventEmitter ,OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import { Router ,NavigationEnd } from '@angular/router';

@Component({
  selector: 'zq-tabs-operation',
  template: `
    <nz-tabset [nzType]="'card'" [nzSelectedIndex]="selectTabIndex" (nzSelectedIndexChange)="selectCallBack(event)">
      <nz-tab *ngFor="let tab of tabs" (nzClick)="childEvent(tab)" (nzSelect)="tabSelect(tab)">
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
export class ZqTabsComponent implements OnInit {
    @Output() clickEvents = new EventEmitter();
    @Output() tagSelect = new  EventEmitter();
    @Output() closeTabs = new EventEmitter();
    // @Input() seleceIndex:Number;
    @Input() tabList;
    @Input() currentTab;
    tabs : Array<any>
    selectTabIndex:Number;
  constructor(private messageService:NzMessageService,private router:Router){
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) { // 当导航成功结束时执行
        console.log('NavigationEnd:', event);
        this.tabs = this.tabList;
        if(this.currentTab){ 
          this.selectTabIndex = this.currentTab.index; 
          this.tabList.filter(element=>{
            if(element.select == true){
              this.selectTabIndex = element.index;
            }
          })
        }
       
      }
    });
  }
  ngOnInit(){
    this.tabs = this.tabList;
  }
  //tab被选中的回调
  selectCallBack(event){
    // console.log("tab页签被选中了",event)
  }
  childEvent(tab) {
    this.clickEvents.emit(tab);
  }
  tabSelect(tab){
    this.selectTabIndex = tab.index;
    // console.log("左侧菜单被选中了",tab.name)
    this.tagSelect.emit(tab);
  }
  closeTab(tab) {
    this.closeTabs.emit(tab);
    var index = this.tabs.indexOf(tab)
    this.tabs.splice(index, 1);
    if(index != 0){
      this.tabs[index-1].index;
    }else{
      this.tabs[0].index;
    }
  }
}