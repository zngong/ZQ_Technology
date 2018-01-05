import { Component, Output, Input ,OnInit,EventEmitter} from '@angular/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'zq-date-picker',
  template: `
      <nz-select style="width: 70px;margin-right: -3px;" [(ngModel)]="selectedOption" [nzPlaceHolder]="'choose option'" (nzOpenChange)="optionChange($event)">
      <nz-option
        *ngFor="let option of options"
        [nzLabel]="option.label"
        [nzValue]="option"
        [nzDisabled]="option.disabled">
      </nz-option>
    </nz-select>
    <nz-datepicker style="width: 100px;margin-right: 2px;" (ngModelChange)="_startDate=$event;_startValueChange()" [ngModel]="_startDate" [nzDisabledDate]="_disabledStartDate" [nzFormat]="'YYYY-MM-DD'" [nzPlaceHolder]="'Start date'"></nz-datepicker>-
    <nz-datepicker style="width: 100px;" (ngModelChange)="_endDate=$event;_endValueChange()" [ngModel]="_endDate" [nzDisabledDate]="_disabledEndDate" [nzFormat]="'YYYY-MM-DD'" [nzPlaceHolder]="'End date'"></nz-datepicker>`,
  styles  : [],
})
export class ZqDatePickerComponent  implements OnInit  {
  @Output() selectDateFun = new EventEmitter();;
  options = [];
  selectedOption;
  _startDate = null;
  _endDate = null;
  dateParam = {};
  currentOption : string = 'week';
  now = new Date(); //当前日期 
  nowDayOfWeek = this.now.getDay(); //今天本周的第几天 
  nowDay =  this.now.getDate()+1; //当前日 
  nowMonth = this.now.getMonth(); //当前月 
  nowYear =  this.now.getFullYear(); //当前年 
  weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek); //当前周的第一天
  weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek)); //当前周的最后一天
  monthStartDate =  new Date(this.nowYear, this.nowMonth, 1);//当前月第一天
  monthEndDate = new Date();

  constructor(private datePipe:DatePipe){

  }
  ngOnInit() {
    var monthDays = this.getMonthDays(this.nowYear,this.nowMonth+1);
    this.monthEndDate = new Date(this.nowYear, this.nowMonth,monthDays)
    setTimeout(_ => {
      this.options = [
        { value: 'day', label: '本日' },
        { value: 'week', label: '本周' },
        { value: 'month', label: '本月' },
        { value: 'year', label: '本年' },
        { value: 'userDefined', label: '自定义' }
      ];
      this.selectedOption = this.options[2];//默认当前月
      this._startDate = new Date(this.monthStartDate);
      this._endDate = new Date(this.monthEndDate);
      this.selectDateCallBack();
    }, 100);
   
  }
  //选择时间的回调
  selectDateCallBack(){
    setTimeout(()=>{
      this.dateParam = {
        startDate: this._startDate ? this.datePipe.transform(new Date(this._startDate), 'yyyy-MM-dd'):'',
        endDate:this._endDate ? this.datePipe.transform(new Date(this._endDate), 'yyyy-MM-dd'):'',
      }
       this.selectDateFun.emit(this.dateParam);
    },100)
   
  }
  //按年月日选择日期
  optionChange(event){
    if(!event){
      if(this.currentOption != this.selectedOption.value){
        this.currentOption = this.selectedOption.value;
         switch(this.selectedOption.value){
            case "day":
                this._startDate = new Date();
                this._endDate = new Date();
                break;
            case "week": 
                this._startDate = new Date(this.weekStartDate);
                this._endDate = new Date(this.weekEndDate);
                break;
            case "month":
                this._startDate = new Date(this.monthStartDate);
                this._endDate = new Date(this.monthEndDate);
                break;
            case "year":
                this._startDate = new Date(this.nowYear,0,1);
                this._endDate = new Date(this.nowYear,11,31);
                break;
         }
         this.selectDateCallBack();
       
      }
    }
  }
  //获得某月的天数 
  getMonthDays = (year,month) =>{ 
    var d = new Date(year, month, 0);
    return d.getDate();
  };
  //开始时间改变时。如果开始时间大于结束时间，则结束时间重置为null
  _startValueChange = () => {
    this.selectedOption = this.options[4];
    if (this._startDate > this._endDate) {
      this._endDate = null;
    }
    this.selectDateCallBack();
  };
  //结束时间改变时。如果结束时间大于开始时间，则开始时间重置为null
  _endValueChange = () => {
    this.selectedOption = this.options[4];
    if (this._startDate > this._endDate) {
      this._startDate = null;
    }
    this.selectDateCallBack();
  };
  //如果开始时间大于结束时间就禁用
  _disabledStartDate = (startValue) => {
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() > this._endDate.getTime();
  };
  //结束时间小于开始时间就禁用
  _disabledEndDate = (endValue) => {
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() < this._startDate.getTime();
  };
}