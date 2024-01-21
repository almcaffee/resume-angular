import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  ArcElement,
  Chart,
  ChartData,
  ChartOptions,
  DoughnutController,
} from 'chart.js';
import { Store, select } from '@ngrx/store';
import { selectPosition } from '../../../store/store.selectors';
import { Subject, filter, take, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PositionUse } from '../../../models';
import { chartColors } from '../chart-colors';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent implements OnDestroy {
  @ViewChild('chartCanvas', { static: true }) canvas!: ElementRef;
  chart!: unknown;
  chartValue!: number;
  chartId = new Date().getTime().toString();
  chartOptions: ChartOptions;
  destroy$ = new Subject<void>();

  constructor(private readonly store: Store) {
    Chart.register(DoughnutController, ArcElement);
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
        },
        colors: {
          forceOverride: true,
        },
        title: {
          display: true,
          text: 'Custom Chart Title',
        },
        tooltip: {
          enabled: true,
        },
      },
    };
  }

  ngAfterViewInit() {
    this.store
      .pipe(
        select(selectPosition()),
        takeUntil(this.destroy$),
        filter((position) => !!position),
        tap((position) => {
          console.log(position);
          if (position?.stats) {
            this.addChart(position.stats, this.chartOptions);
          }
        }),
      )
      .subscribe();
  }

  addChart(
    stats: Array<PositionUse>,
    options: ChartOptions = this.chartOptions,
  ) {
    const datasets: ChartData<'bar', { key: string; value: number }[]> = {
      datasets: [
        {
          label: 'Usage',
          data: stats.map((stat) => ({
            key: stat.name,
            value: stat.percentage,
          })),
          backgroundColor: stats.map((_, i) => chartColors[i]),
          parsing: {
            xAxisKey: 'key',
            yAxisKey: 'value',
          },
        },
      ],
    };

    const labels = stats.map((stat) => stat.name);

    console.log(this.canvas);
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        ...datasets,
      },
      options,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
