import { Injectable,EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
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
    public serverUrl:string = '/api/zFrame';//代理服务器路径 http://210.16.185.150:8080/zFrame

    constructor(private http:Http) {
        
    }

}