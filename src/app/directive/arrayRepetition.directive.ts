import { Directive ,Input ,Output ,EventEmitter} from "@angular/core";

@Directive({
    selector:'arrayRemoveRepet'
})
export class ArrayRemoveRepet {
    @Input() repetArrays:Array<any>;
    @Output() newArray = new EventEmitter();;
    
    constructor(){

    }

    
}