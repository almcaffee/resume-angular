import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ExperienceService } from '../../services/experience.service';
import { combineLatest } from 'rxjs';
import { Position } from '../../models';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  @Input() title: string | undefined;
  jobs$ = this.es.getAllExperience();
  titles$ = this.es.getExperienceList('title');
  companies$ = this.es.getExperienceList('companyName');

  jobs: Array<Position> = [];
  companies: Array<string> = [];
  titles: Array<string> = [];
  constructor(
    private readonly ar: ActivatedRoute,
    private readonly es: ExperienceService,
  ) {}

  ngOnInit() {
    this.getExperienceData();
  }

  getExperienceData() {
    combineLatest([this.jobs$, this.titles$, this.companies$]).subscribe(
      ([jobs, titles, companies]) => {
        this.jobs = jobs;
        this.titles = titles;
        this.companies = companies;
      },
    );
  }
}
