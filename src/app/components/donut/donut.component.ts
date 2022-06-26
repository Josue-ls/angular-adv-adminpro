import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent {
  chartData: number[] = [1, 2, 3];
  chartLabels: string[] = ['L1', 'L2', 'L3'];

  @Input() title: string = 'Without title';
  @Input('chartData') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.chartLabels,
    datasets: [{ data: this.chartData }],
  };
}
