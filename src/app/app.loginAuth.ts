import { Component ,Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot,
         CanActivateChild,NavigationExtras,CanLoad, Route}  from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {NzMessageService} from 'ng-zorro-antd';


@Injectable()
export class CanAdminProvide implements CanActivate {

    constructor(private cookieService: CookieService, private msg: NzMessageService) {}

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

            this.msg.error('用户未登录!', {nzDuration: 3000});
            observer.next(false);
            observer.complete();
        });
    }

}