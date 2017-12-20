import { Injectable,EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * app服务
 */
@Injectable()
export class AppService {
    private menuSubject = new Subject<any>();
    serverUrl:string = 'http://210.16.185.150:8080/zFrame';

    constructor(private http:Http) {
        
    }
    //登录验证
    authLogin(username:string,password:string){
        const params = new HttpParams()
        .set('username', password)
        .set('password', "1");
        var promise = new Promise((resolve, reject) => {
            this.http.get("/api/zFrame/user/login?username="+username+"&password="+password)
            .map(res=>res.json())
            .subscribe(response =>{
                if(response.result == 'true'){
                    resolve(response);
                }else{
                    reject({retCode:'FAIL',retMsg:'登录失败！',result:response})
                }
           }, (err) => {
                reject({retCode:'FAIL',retMsg:'登录失败！',result:err})
           })
        });
          return promise;
    }
    //获取菜单
    getMenu():Promise<any>{
        // const params = new HttpParams()
        // .set('username', password)
        // .set('password', "1");
        var promise = new Promise((resolve, reject) => {
            this.http.get("/api/zFrame/menu/allmenu")
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
    //     this.http.get("assets/data/menu.json")
    //     .map(res=>res.json())
    //     .subscribe(response =>{
    //         this.menuSubject.next({retCode:"SUCCESS",result:response.menuData})
    //        
    // }, (err) => {
    //     console.log('rx error: ' + err);
    //     this.menuSubject.next({retCode:"Fail",retMsg:"请求菜单列表失败"})
    // })
    }
    // //获取菜单
    // getMenus(): Observable<any> {
    //     return this.menuSubject;
    //  }
     // 取消菜单订阅
     cancelMenuSubject(){
        this.menuSubject.unsubscribe();
    }
//     //异常处理
//     public handleError(error: any): Promise<any> {
//         console.error('An error occurred', error); 
//         return Promise.reject(error.message || error);
//     }
// }