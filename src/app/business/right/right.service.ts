import { Injectable,EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppService } from '../../../app/app.service'

/**
 * app服务
 */
@Injectable()
export class RightService {
    // private menuSubject = new Subject<any>();
   

    constructor(private http:Http,private appService:AppService) {
        
    }
}