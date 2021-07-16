import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {TimelineModule} from "primeng/timeline";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        TimelineModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
