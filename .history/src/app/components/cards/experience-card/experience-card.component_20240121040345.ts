import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ExpType, Experience } from '../../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CardModule, DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
  @Input() data!: Experience;
  @Input() type: ExpType | undefined;
  @Input() showDetail: boolean | undefined;
}
