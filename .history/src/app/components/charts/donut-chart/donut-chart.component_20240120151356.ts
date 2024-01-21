import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Store, select } from '@ngrx/store';
import { selectPosition } from '../../../store/store.selectors';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent implements OnDestroy {
  @ViewChild('chartCanvas', { static: true }) canvas!: Chart;
  chart!: unknown;
  chartValue!: number;
  chartData: Array<number> = [];
  chartId = new Date().getTime().toString();
  chartOptions: Record<string, unknown> = {};
  destroy$ = new Subject<void>();

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

  ngOnInit() {
    this.store
      .pipe(
        select(selectPosition()),
        takeUntil(this.destroy$),
        tap((position) => {
          console.log(position);
          if (position?.stats) {
            const chartData = position.stats.map((stat) => stat.percentage);
            const chartLabels = position.stats.map((stat) => stat.name);
            this.addChart(chartLabels, chartData);
          }
        }),
      )
      .subscribe();
  }

  addChart(labels: Array<string>, data: Array<number>, options: unknown = {}) {
    console.log(this.canvas);
    this.chart = new Chart(this.chartId, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            label: 'My First Dataset',
            data,
          },
        ],
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
