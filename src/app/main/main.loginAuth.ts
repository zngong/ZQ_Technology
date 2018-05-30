import { Component ,Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot,
         CanActivateChild,NavigationExtras,CanLoad, Route}  from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {NzModalService} from 'ng-zorro-antd';


@Injectable()
export class MainLoginAuth implements CanActivate {

    constructor(private cookieService: CookieService, private modalMsg: NzModalService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            // 已登录
            if (this.cookieService.get('loginStatus') == 'true') {
                observer.next(true);
                observer.complete();
                return;
            }
            this.modalMsg.warning({
                title: '温馨提示',
                content: '当前会话已过期，请重新登录',
                maskClosable:false,
                onOk() {
                    this.router.navigate(['/login']);
                },
                onCancel(){
                    this.router.navigate(['/login']);
                }
              });
        });
    }

}