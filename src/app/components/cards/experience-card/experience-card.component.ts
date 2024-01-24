import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ExpType, Experience } from '../../../models';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, CardModule, DatePipe],
  templateUrl: './experience-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  @Input() data!: Experience;
  @Input() type: ExpType | undefined;
  @Input() showDetail: boolean | undefined;

  constructor() {}
}
