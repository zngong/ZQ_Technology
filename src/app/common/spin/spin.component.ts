import { Component ,Input ,Output ,OnInit} from '@angular/core';

@Component({
  selector: 'zq-spin',
  template: `
    <div class="zq-container" *ngIf="closeSpin">
        <div  class="zq-spin-container">
             <nz-spin [nzSize]="loadSize" [nzSpinning]="closeSpin"></nz-spin> 
        </div>
        
    </div>
    `,
   
  styles  : [
      `
      .zq-container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 33335;
        position: fixed;opacity: 0.3;
        background-color: #e3dada;
      }
      .zq-spin-container{
        margin-left: auto;
        margin-right: auto;
        width: 40px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      `
    
  ]
})
export class ZqSpinComponent  implements OnInit {
    @Input() loadSize:string;
    @Input() closeSpin:boolean;
    constructor(){}
    ngOnInit(){
        // setTimeout(()=>{
        //     this.closeSpin = false
        // },5000)
        console.log(this.loadSize,this.closeSpin)
    }
 }