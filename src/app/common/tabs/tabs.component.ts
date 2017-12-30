import { Component ,Output , Input ,EventEmitter ,OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import { Router ,NavigationEnd } from '@angular/router';

@Component({
  selector: 'zq-tabs-operation',
  template: `
    <nz-tabset [nzType]="'card'" [nzSelectedIndex]="selectTabIndex" (nzSelectedIndexChange)="tabSelect(event)">
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
    @Input() tabList;
    @Input() currentTab;
    tabs : Array<any>
    selectTabIndex:Number;
  constructor(private messageService:NzMessageService,private router:Router){
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) { // 当导航成功结束时执行
        // console.log('NavigationEnd:', event);
        this.tabs = this.tabList;
        if(this.currentTab){ 
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
  //点击页签时的回调
  childEvent(tab) {
    this.clickEvents.emit(tab);
  }
  //选中页签的回调（选中和点击有区别）
  tabSelect(){
    this.tagSelect.emit();
  }
  //关闭页签的回调
  closeTab(tab) {
    var param = {
      index:-1,
      tab:tab
    };
    for(let i = 0;i<this.tabList.length;i++){
      if(tab.id == this.tabList[i].id){
        param.index = i;
      }
      if(i== this.tabList.length-1){
        this.closeTabs.emit(param);
      }
    }
  }
}