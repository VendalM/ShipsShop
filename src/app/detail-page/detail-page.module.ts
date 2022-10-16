import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {SearchPipe} from "../search.pipe";

@NgModule({
  declarations: [
    HomePageComponent,
    SearchPipe
  ],
  imports: [HomePageRoutingModule, CommonModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
