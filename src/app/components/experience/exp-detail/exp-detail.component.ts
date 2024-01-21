import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { Store, select } from '@ngrx/store';
import { selectPosition } from '../../../store/store.selectors';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from '../../charts/donut-chart/donut-chart.component';
@Component({
  selector: 'app-exp-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, ChipModule, DonutChartComponent],
  templateUrl: './exp-detail.component.html',
  styleUrl: './exp-detail.component.scss',
})
export class ExpDetailComponent {
  position$ = this.store.pipe(select(selectPosition()));
  constructor(private readonly store: Store) {}
}
