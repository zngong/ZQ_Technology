import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'zq-select-search',
  template: `
    <nz-select style="width: 100px;" [nzPlaceHolder]="placeholder" 
    [(ngModel)]="selectedOption" nzShowSearch  (nzOpenChange)="optionChange($event)">
      <nz-option
        *ngFor="let option of searchOptions"
        [nzLabel]="option.label"
        [nzValue]="option"
        [nzDisabled]="option.disabled">
      </nz-option>
    </nz-select>
  `,
  styles  : []
})
export class ZqSelectSearchComponent implements OnInit {
 @Input()placeholder;
 @Input()selectArry:Array<any>;
 @Output()selectCallBack = new  EventEmitter();
  selectedOption;
  searchOptions;
  currentSelect = {};

  ngOnInit() {
    
    setTimeout(_ => {
        this.searchOptions = this.selectArry;
        this.selectedOption = this.searchOptions[0];
        this.optionChange(false);
      }, 100);
  }
  //选择后的回调 event:true(打开)，false(关闭)
  optionChange(event){
      if(!event){
        if(this.currentSelect != this.selectedOption.value){
            this.currentSelect = this.selectedOption.value;
            this.selectCallBack.emit(this.selectedOption);
        }

      }

  }
}
