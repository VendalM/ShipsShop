import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http"
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./api/in-memory-data-service.service";
import {NgxPaginationModule} from "ngx-pagination";
import {SearchPipe} from "./search.pipe";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {dataEncapsulation: false}),
    NgxPaginationModule
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
