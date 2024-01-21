import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ExperienceService } from '../../services/experience.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { expChildRoutes } from './experience.routes';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ButtonModule,
    ChipModule,
    SectionHeaderComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  jobs$ = this.expService.getExperience();
  constructor(private readonly expService: ExperienceService) {}
}
