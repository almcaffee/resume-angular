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

interface CustomChartData {
  key: string;
  value: number;
  color: string;
}

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
  chartData: Array<CustomChartData> | undefined;
  destroy$ = new Subject<void>();

  private readonly chartOptions: ChartOptions = {
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
        align: 'center',
      },
      title: {
        display: false,
        text: 'Position Responsibilities',
      },
      tooltip: {
        callbacks: {
          label: ({ parsed }) => ` ${parsed}% of time spent`,
        },
      },
    },
  };

  constructor(private readonly store: Store) {
    Chart.register(DoughnutController, ArcElement);
  }

  ngAfterViewInit() {
    this.store
      .pipe(
        select(selectPosition()),
        takeUntil(this.destroy$),
        tap((position) => {
          if (!position?.stats) {
            if (this.chart) {
              this.chart.destroy();
            }
            return;
          }
          this.chartData = this.getChartData(position.stats);
          this.addChart(this.chartOptions);
        }),
      )
      .subscribe();
  }

  getChartData(stats?: Array<PositionUse>): Array<CustomChartData> | undefined {
    const chartData = stats?.map((stat: PositionUse, idx: number) => ({
      key: stat.name,
      value: stat.percentage,
      color: chartColors[idx],
    }));
    this.store.dispatch({
      type: '[Experience Component] Set Position Data',
      data: this.chartData,
    });
    return chartData;
  }

  addChart(options: ChartOptions, chartData: Array<CustomChartData>) {
    const datasets: ChartData<'doughnut', Array<any>> = {
      datasets: [
        {
          label: '% Time Spent',
          data: chartData.map(({ key, value }) => ({
            key,
            value,
          })),
          backgroundColor: chartData.map(({ color }) => color),
        },
      ],
    };

    this.chart = new Chart(this.chartId, {
      type: 'doughnut',
      data: {
        labels: chartData.map(({ key }) => key),
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
