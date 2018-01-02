import { Injectable,EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppService } from '../../app/app.service'

/**
 * app服务
 */
@Injectable()
export class MainService {
    private menuSubject = new Subject<any>();
    public tabList = [];

    constructor(private http:Http,private appService:AppService) {
        
    }
    //获取菜单
    getMenu():Promise<any>{
        // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        var promise = new Promise((resolve, reject) => {
        // this.http.get(this.appService.serverUrl+"/menu/allmenu")
        this.http.get("assets/data/menu.json")
            .map(res=>res.json())
                .subscribe(response =>{
                    resolve(response);
                    // if(response.result == 'true'){
                    //     resolve(response);
                    //     // this.menuSubject.next({retCode:"SUCCESS",result:response.menuData});
                    //      // this.menuSubject.complete();//执行complete方法后，如果有新值，也不会通知观察者
                    // }else{
                    //     reject({retCode:'FAIL',retMsg:'请求菜单失败！',result:response})
                    //     // this.menuSubject.next({retCode:"Fail",retMsg:"请求菜单列表失败"})
                    // }
                }, (err) => {
                    reject({retCode:'FAIL',retMsg:'请求菜单失败！',result:err})
                    this.menuSubject.next({retCode:"Fail",retMsg:"请求菜单列表失败"})
                })
         });
        return promise;
    }
     // 取消菜单订阅
     cancelMenuSubject(){
        this.menuSubject.unsubscribe();
    }
    //根据id字段判断数组中是否存在该元素，是返回第一次出现的索引值，不是返回-1，参数不正确返回‘error’
    arrayRemoveRepet(array:Array<any>,id,value){
        if(Array.isArray(array) && id){
            if(array.length == 0){
                return -1
            }
            var indexs = -1;
            for(let i = 0;i<array.length;i++){
                if(array[i][id] == value){
                    indexs = i;
                    return i;
                }
                if(i == array.length-1 && indexs === -1){
                    return -1
                }
            }

        }else{
            console.log('参数不正确')
            return 'error'
        }
    }
   
}