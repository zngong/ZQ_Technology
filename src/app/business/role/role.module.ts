import { NgModule } from "@angular/core";
import { CommonModule }       from '@angular/common';
import { RouterModule} from "@angular/router";
import { RoleRoutingModule } from "./role-routing.module";
import { RoleComponent } from "./role.component";
import { RoleService } from "./role.service";
import { RoleListComponent } from "./roleList.component"

@NgModule({
    imports:[
        RouterModule,
    ],
    declarations:[
        RoleComponent,
        RoleListComponent
    ],
    exports:[],
    providers:[RoleService]
})
export class RoleModule {}