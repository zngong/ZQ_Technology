import { Injectable,EventEmitter } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * app服务
 */
@Injectable()
export class BusinessService {
    private tabSubject = new Subject<any>();
   

    constructor() {
        
    }
    operateTab(tabList:Array<any>){
        // console.log("====tabList=====",tabList)
        this.tabSubject.next(tabList);
    }
     //获取tab
     getTabList(): Observable<any> {
        return this.tabSubject;
     }
     //退出登录取消页签订阅
     cancelMenuSubject(){
        this.tabSubject.unsubscribe();
    }
   
   
}