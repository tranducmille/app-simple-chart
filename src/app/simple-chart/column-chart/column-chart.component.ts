import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    elements: { line: { fill: false } }
  };
  public chartColors: any[] = [{  backgroundColor:["rgb(93, 98, 181)","rgb(93, 98, 181)","rgb(93, 98, 181)"
  ,"rgb(93, 98, 181)","rgb(93, 98, 181)","rgb(93, 98, 181)","rgb(93, 98, 181)","rgb(93, 98, 181)"]  }];
  public barChartLabels = ['Venezuela', 'Saudi', 'Canada', 'Iran', 'Russia', 'UAE', 'UK', 'US'];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [ {data: [290, 260, 180, 145, 120, 110, 60, 30]}];
  constructor() { }
  ngOnInit(): void {
  }
}
