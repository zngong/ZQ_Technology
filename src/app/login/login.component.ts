import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Md5 } from "ts-md5/dist/md5";


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,) {
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
      this.router.navigate(['/main']);
    }
  }


}