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
export class LoginService {
    private menuSubject = new Subject<any>();
   

    constructor(private http:Http,private appService:AppService) {
        
    }

    //登录验证
    authLogin(username:string,password:string){
        const params = new HttpParams()
        .set('username', password)
        .set('password', "1");
        var promise = new Promise((resolve, reject) => {
            this.http.get(this.appService.serverUrl+"/user/login?username="+username+"&password="+password)
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
}