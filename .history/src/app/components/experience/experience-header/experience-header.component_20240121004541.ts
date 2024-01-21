import { Component, Input, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ExperienceService } from '../../../services/experience.service';
import { Observable, combineLatest, filter, switchMap, tap } from 'rxjs';
import { IndexList, Position } from '../../../models';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { Store, select } from '@ngrx/store';
import {
  selectPosition,
  selectPositionData,
  selectPositions,
  selectTitles,
} from '../../../store/store.selectors';
import { DonutChartComponent } from '../../charts/donut-chart/donut-chart.component';
@Component({
  selector: 'app-experience-header',
  standalone: true,
  imports: [
    MenuModule,
    ButtonModule,
    CommonModule,
    DropdownModule,
    TagModule,
    DonutChartComponent,
  ],
  templateUrl: './experience-header.component.html',
  styleUrl: './experience-header.component.scss',
})
export class ExperienceHeaderComponent {
  @ViewChild('menu') menu: unknown | undefined;
  position$ = this.store.pipe(select(selectPosition()));
  jobs$ = this.store.pipe(select(selectPositions()));
  titles$ = this.store.pipe(select(selectTitles()));
  companies$ = this.es.getExperienceList<IndexList>('companyName', {
    showId: true,
  });

  jobs: Array<Position> = [];
  companies: Array<IndexList> = [];
  titles: Array<string> = [];

  legendItems$ = this.store.pipe(select(selectPositionData()));

  get companiesMenuItems(): Array<MenuItem> {
    return this.companies.map((item: IndexList) => ({
      label: item['companyName']! as string,
      routerLink: ['/experience', item.id],
    }));
  }

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly es: ExperienceService,
  ) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => this.getExperienceData()),
      )
      .subscribe();

    this.position$.subscribe((position) => {
      // console.log(position);
    });
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

  toggleMenu(event: MouseEvent) {
    console.log(event);
    console.log(this.menu);
    (this.menu as any)?.toggle?.(event);
  }
}
