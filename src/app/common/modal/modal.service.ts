import { Injectable } from '@angular/core';
import { ConfirmConfig } from './modal-config';
import { DialogConfig } from './modal-config';
import { NzModalService } from 'ng-zorro-antd';
/**
 * 模块框服务
 */
@Injectable()
export class ModalService {
    constructor(private modalService:NzModalService){}
    //确认框
    confirm(config:ConfirmConfig): Promise<any> {
        var promise = new Promise((resolve, reject) => {
            this.modalService.confirm({
                title  : config.title,
                content: config.content,
                maskClosable:false,
                onOk() {
                    resolve('OK');
                },
                onCancel() {
                    resolve('CANCWL');
                }
                });
            });
            return promise;
        
    }
    //弹出框<使用模板>
    open(config): Promise<any> {
        var promise = new Promise((resolve, reject) => {
           this.modalService.open(config).subscribe(result => {
            if(result == 'OK'){
                resolve(result);
            }
          });
        });
        return promise;
        
    }
        

}