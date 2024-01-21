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
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent implements OnDestroy {
  @ViewChild('chartCanvas', { static: true }) canvas: ElementRef | undefined;
  chart!: any;
  chartValue!: number;
  chartId = new Date().getTime().toString();
  chartOptions: any;
  chartData: Array<{ key: string; value: number; color: string }> = [];
  destroy$ = new Subject<void>();

  constructor(private readonly store: Store) {
    Chart.register(DoughnutController, ArcElement);
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 0,
      layout: {
        padding: 0,
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          align: 'middle',
        },
        title: {
          display: false,
          text: 'Position Responsibilities',
        },
        dataLabels: {
          display: true,
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const { label, parsed } = context;
              const additionalText = ` ${parsed}% of time spent`;
              return additionalText;
            },
          },
        },
      },
    };
  }

  ngAfterViewInit() {
    this.store
      .pipe(
        select(selectPosition()),
        takeUntil(this.destroy$),
        tap((position) => {
          if (!position) {
            if (this.chart) {
              this.chart.destroy();
            }
            return;
          }
          position?.stats && this.addChart(position.stats, this.chartOptions);
        }),
      )
      .subscribe();
  }

  addChart(
    stats: Array<PositionUse>,
    options: ChartOptions = this.chartOptions,
  ) {
    this.chartData = stats.map((stat: PositionUse, idx: number) => ({
      key: stat.name,
      value: stat.percentage,
      color: chartColors[idx],
    }));
    this.store.dispatch({
      type: '[Experience Component] Set Position Data',
      data: this.chartData,
    });
    const datasets: ChartData<'doughnut', Array<any>> = {
      datasets: [
        {
          label: '% Time Spent',
          data: this.chartData.map(({ key, value }) => ({
            key,
            value,
          })),
          backgroundColor: this.chartData.map(({ color }) => color),
        },
      ],
    };

    this.chart = new Chart(this.chartId, {
      type: 'doughnut',
      data: {
        labels: stats.map((stat) => stat.name),
        ...datasets,
      },
      options,
    });

    this.chart.de;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
