/**
 * 确认框配置
 */
export class ConfirmConfig{
    title:string;
    content:string;
  
   constructor(title:string='',content:string=''){
       this.title= title;
       this.content=content;
   }
   
   
   getTitle(): string {
       return this.title;
   }

   getContent():string{
      return this.content;
   }

}
export class DialogConfig{
    title:string;
    content;
    param:object;
  
   constructor(title:string='',content,param:object={}){
       this.title= title;
       this.content=content;
   }
   
   
   getTitle(): string {
       return this.title;
   }

   getContent():string{
      return this.content;
   }
   getParam():object{
       return this.param;
   }

}