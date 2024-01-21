import { Component, Input, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { Experience } from '../../../models';
import { TOTAL_EXP } from '../../../constants';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent  implements OnDestroy {

  @Input() set exp(exp: Experience) {
    this.chartValue = exp.yearsOfExperience / TOTAL_EXP;
    this.chartData = [this.chartValue, 100 - this.chartValue];
    this.experience = exp;
  }

  chart!: unknown;
  chartValue!: number;
  chartData: Array<number> = [];
  chartId = new Date().getTime().toString();
  chartOptions: Record<string, unknown> = {};
  experience!: Experience;

  addChart(labels: Array<string>, dataSets: Array<number>, options: unknown = {}) {
    this.chart = new Chart(this.chartId, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            label: this.experience.name,
            data: this.chartData,
            backgroundColor: [
              'rgb(59, 130, 246)',
              'rgb(255, 255, 255)'
            ]
          },
        ],
      },
    });
  }

  setCh

  ngOnDestroy(): void {
      //this.charts?.
  }

}
