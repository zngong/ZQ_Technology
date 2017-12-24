import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }    from '@angular/http';
import  { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**
 * 路由复用
 */
import { RouterModule ,RouteReuseStrategy} from "@angular/router";
import { SimpleReuseStrategy } from './common/routeReuse/routeReuseStrategy';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
    
  ],
  providers:[{ provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }