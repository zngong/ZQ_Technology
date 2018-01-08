import { Component ,Input ,OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'zq-search-button',
  template: `
    <button nz-button [nzType]="'primary'" (click)="clickQuery()">
      <i class="anticon anticon-search"></i><span>查询</span>
    </button>
    <button nz-button [nzType]="'default'">
      <span>重置</span>
    </button>
    <button class="moreBtn" nz-button [nzType]="'default'"  *ngIf="moreBtn" (click)="expandMoreFn()">
     <span *ngIf="expandMore">更多</span>
     <span *ngIf="!expandMore">收起</span>
    <i class="anticon moreBtnIcon" [ngClass]="{'anticon-down':expandMore==true,'anticon-up':expandMore==false}"></i>
  </button>
  `,
  styles  : [
    `
     ..moreBtn{
       width:60px;
     }
     .moreBtnIcon{
       line-height: 26px;
     }
     .moreBtn span{
       margin-right:-10px;
     }
    `
  ]
})
export class ZqSearchButtonComponent implements OnInit{
  @Input() moreBtn;
  @Output() doQuery = new  EventEmitter();
  @Output() doReset = new  EventEmitter();
  @Output() doExpandMore = new  EventEmitter();
  expandMore:boolean;
  
  ngOnInit(){
    this.expandMore = true;
  }
  //展开/收起
  expandMoreFn(){
    this.expandMore = this.expandMore ? false:true;
    this.doExpandMore.emit(this.expandMore);
  }
  //查询
  clickQuery(){
    this.doQuery.emit();
  }
  //重置
  clickReset(){
    this.doReset.emit();
  }
 }