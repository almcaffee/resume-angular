import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { Store, select } from '@ngrx/store';
import { selectPosition } from '../../../store/store.selectors';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from '@component/layout/home/home-carousel/home-carousel.component';
import { DonutChartComponent } from '@component/charts/donut-chart/donut-chart.component';
@Component({
  selector: 'app-exp-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ChipModule,
    DonutChartComponent,
    HomeCarouselComponent,
  ],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss',
})
export class ExpDetailComponent {
  position$ = this.store.pipe(select(selectPosition()));
  constructor(private readonly store: Store) {}
}
