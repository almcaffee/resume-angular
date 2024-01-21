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
        tap((params) => console.log(params)),
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
        tap(([jobs, titles, companies]) => {
          this.store.dispatch({ type: 'Set Positions', payload: jobs });
          this.store.dispatch({ type: 'Set Titles', payload: titles });
          this.store.dispatch({ type: 'Set Companies', payload: companies });
        }),
        switchMap(() => timer(500)),
      )
      .subscribe(() => console.log(this.store));
  }

  getExperienceData(id: number) {
    return this.expService.getExperience(id).pipe(
      tap((data: Position) => {
        this.store.dispatch({ type: 'Set Position', payload: data });
      }),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
