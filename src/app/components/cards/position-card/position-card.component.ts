import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Position } from '../../../models';
import { CommonModule, DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-position-card',
  standalone: true,
  imports: [CommonModule, CardModule, DatePipe, TagModule, RouterModule],
  templateUrl: './position-card.component.html',
  styleUrl: './position-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionCardComponent {
  @Input() data!: Position;
  @Input() showDetail: boolean | undefined;
  constructor(private readonly router: Router) {}
}
