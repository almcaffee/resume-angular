import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ExperienceService } from '../../services/experience.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
  EMPTY,
  Subject,
  catchError,
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
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { getToastMessage } from '../../utils';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ChipModule, ExperienceHeaderComponent],
  providers: [MessageService],
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
    private readonly messageService: MessageService,
  ) {
    this.route.firstChild?.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap(({ id }) =>
          id ? this.getExperienceData(id) : this.clearExperienceData(),
        ),
        catchError(() => this.clearExperienceData()),
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
      )
      .subscribe();
  }

  clearExperienceData() {
    this.store.dispatch({ type: '[Experience Component] Clear Position' });
    return EMPTY;
  }

  getExperienceData(id: number) {
    return this.expService.getExperience(id).pipe(
      tap((position: Position) => {
        this.store.dispatch({
          type: '[Experience Component] Set Position',
          position,
        });
      }),
      catchError((err: HttpErrorResponse) => {
        const toastMessage = getToastMessage(err);
        this.store.dispatch({
          type: '[Experience Component] Send Toast Message',
          toastMessage,
        });
        return EMPTY;
      }),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
