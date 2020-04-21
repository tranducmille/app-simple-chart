import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { ColumnChartComponent } from './simple-chart/column-chart/column-chart.component';
import { LineChartComponent } from './simple-chart/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleChartComponent,
    ColumnChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
