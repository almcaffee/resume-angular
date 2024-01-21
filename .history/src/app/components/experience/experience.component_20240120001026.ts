import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ExperienceService } from '../../services/experience.service';
import { SectionHeaderComponent } from './section-header/section-header.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { expChildRoutes } from './experience.routes';
import { EMPTY, Subject, filter, map, switchMap, takeUntil, tap } from 'rxjs';
import { Experience, Position } from '../../models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ChipModule, SectionHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly destroy$ = new Subject<void>();
  jobs$ = this.expService.getAllExperience().pipe(takeUntil(this.destroy$));
  titles$ = this.expService
    .getExperienceList('title')
    .pipe(takeUntil(this.destroy$));
  companies$ = this.expService
    .getExperienceList('companyName')
    .pipe(takeUntil(this.destroy$));
  position: Position | undefined;
  constructor(
    private readonly expService: ExperienceService,
    private readonly route: ActivatedRoute,
  ) {
    this.route.firstChild?.params
      .pipe(
        takeUntil(this.destroy$),
        tap((params) => console.log(params)),
        switchMap(({ id }) => (id ? this.getExperienceData(id) : EMPTY)),
      )
      .subscribe();
  }

  getExperienceData(id: number) {
    return this.expService.getExperience(id).pipe(
      tap((data: Position) => {
        this.position = data;
      }),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
