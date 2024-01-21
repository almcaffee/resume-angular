import { Component, Input, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { Store } from '@ngrx/store';
import { selectPosition } from '../../../store/store.selectors';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent implements OnDestroy {
  chart!: unknown;
  chartValue!: number;
  chartData: Array<number> = [];
  chartId = new Date().getTime().toString();
  chartOptions: Record<string, unknown> = {};

  chartData$ = this.store.select(selectPosition()).pipe(
    tap((position) => {
      console.log(position);
      if (position?.stats) {
        this.chartData = position.stats.map((stat) => stat.percentage);
        this.addChart(['Task Distribution'], this.chartData);
      }
    }),
  );

  constructor(private readonly store: Store) {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }

  addChart(labels: Array<string>, data: Array<number>, options: unknown = {}) {
    this.chart = new Chart(this.chartId, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            label: 'My First Dataset',
            data,
            backgroundColor: ['rgb(59, 130, 246)', 'rgb(255, 255, 255)'],
          },
        ],
      },
    });
  }

  ngOnDestroy(): void {
    // this.chart?.destroy();
  }
}
