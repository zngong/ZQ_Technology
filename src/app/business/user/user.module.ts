import { NgModule } from "@angular/core";
import { CommonModule }       from '@angular/common';
import { RouterModule} from "@angular/router";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import { UserListComponent } from "./userList.component"

@NgModule({
    imports:[
        RouterModule,
        UserRoutingModule
    ],
    declarations:[
        UserComponent,
        UserListComponent
    ],
    exports:[],
    providers:[UserService],
    // bootstrap:[UserComponent]
})
export class UserModule {}