import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Md5 } from "ts-md5/dist/md5";
import { LoginService } from './login.service';
import {NzMessageService} from 'ng-zorro-antd';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  spinStatus:boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService:LoginService,private msgService:NzMessageService
                    ,private cookieService:CookieService) {
    this.cookieService.put("loginStatus","false");                 
    let userNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let passwordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }



  /**
   * 登录
   */
  login() {
    if (this.loginForm.valid) {
      this.spinStatus = true;
      this.loginService.authLogin(this.loginForm['value'].userName,this.loginForm['value'].password).then((data)=>{
        console.log('=====登录成功====',data)
        this.spinStatus = false
        this.router.navigate(['/main']);
      },(error)=>{
        this.msgService.error('登录失败!', {nzDuration: 3000});
        this.spinStatus = false;
        console.log('=====登录失败====',error)
      }) 
    }
  }


}