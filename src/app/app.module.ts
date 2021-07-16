import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {TimelineModule} from "primeng/timeline";
import {ChartModule} from "primeng/chart";
import {NgxEchartsModule} from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';

export function load_echarts() {
    return import('echarts');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        TimelineModule,
        ChartModule,
        NgxEchartsModule.forRoot({echarts: load_echarts}),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
