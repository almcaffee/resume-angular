import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ExperienceService } from '../../services/experience.service';
import { Observable, combineLatest, filter, switchMap, tap } from 'rxjs';
import { Bullet, IndexList, Position } from '../../models';
import { MenuItem } from 'primeng/api';

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
  titles$ = this.es.getExperienceList<string>('title');
  companies$ = this.es.getExperienceList<IndexList>('companyName', {
    showId: true,
  });

  jobs: Array<Position> = [];
  companies: Array<IndexList> = [];
  titles: Array<string> = [];

  get companiesMenuItems(): Array<MenuItem> {
    return this.companies.map((item: IndexList) => ({
      label: item['companyName']! as string,
      routerLink: ['/experience', item.id],
    }));
  }

  constructor(
    private readonly router: Router,
    private readonly es: ExperienceService,
  ) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => this.getExperienceData()),
      )
      .subscribe();
  }

  ngOnInit() {
    this.getExperienceData();
  }

  getExperienceData(): Observable<
    [Array<Position>, Array<string>, Array<IndexList>]
  > {
    return combineLatest([this.jobs$, this.titles$, this.companies$]).pipe(
      tap(([jobs, titles, companies]) => {
        this.jobs = jobs;
        this.titles = titles;
        this.companies = companies;
      }),
    );
  }
}
