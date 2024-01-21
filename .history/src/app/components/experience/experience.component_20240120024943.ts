import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ExperienceService } from '../../services/experience.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
  EMPTY,
  Subject,
  combineLatest,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { Position } from '../../models';
import { ExperienceHeaderComponent } from './experience-header/experience-header.component';
import { Store, select } from '@ngrx/store';
import { selectPositions } from '../../store/store.selectors';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ChipModule, ExperienceHeaderComponent],
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
  constructor(
    private readonly expService: ExperienceService,
    private readonly route: ActivatedRoute,
    private readonly store: Store,
  ) {
    this.route.firstChild?.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap(({ id }) => (id ? this.getExperienceData(id) : EMPTY)),
      )
      .subscribe();
  }

  ngOnInit() {
    this.initExperienceData();
  }

  initExperienceData() {
    combineLatest([this.jobs$, this.titles$, this.companies$])
      .pipe(
        tap(([positions, titles, companies]) => {
          this.store.dispatch({
            type: '[Experience Component] Set Positions',
            positions,
          });
          this.store.dispatch({
            type: '[Experience Component] Set Titles',
            titles,
          });
          this.store.dispatch({
            type: '[Experience Component] Set Companies',
            companies,
          });
        }),
        switchMap(() => timer(500)),
      )
      .subscribe(() => console.log(this.store));
  }

  getExperienceData(id: number) {
    return this.expService.getExperience(id).pipe(
      tap((position: Position) => {
        this.store.dispatch({
          type: '[Experience Component] Set Position',
          position,
        });
      }),
      switchMap(() => timer(500)),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
