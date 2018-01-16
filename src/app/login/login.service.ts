import { Injectable,EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Md5 } from "ts-md5/dist/md5";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppService } from '../../app/app.service'

/**
 * app服务
 */
@Injectable()
export class LoginService {
    private menuSubject = new Subject<any>();
   

    constructor(private http:Http,private appService:AppService,private _cookieService:CookieService) {
        
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
                    this._cookieService.put("loginStatus","true");
                }else{
                    this._cookieService.put("loginStatus","false");
                    reject({retCode:'FAIL',retMsg:'登录失败！',result:response})
                }
           }, (err) => {
                reject({retCode:'FAIL',retMsg:'登录失败！',result:err})
                this._cookieService.put("loginStatus","false");
           })
        });
          return promise;
    }
}