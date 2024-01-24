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
  take,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { Position } from '../../models';
import { ExperienceHeaderComponent } from './experience-header/experience-header.component';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { getToastMessage } from '../../utils';
import { TerminalModule } from 'primeng/terminal';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeComponent } from '@component/code/code.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    ChipModule,
    ExperienceHeaderComponent,
    TerminalModule,
    ScrollPanelModule,
    TabViewModule,
    HighlightModule,
    CodeComponent,
  ],
  providers: [MessageService],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  private readonly destroy$ = new Subject<void>();
  jobs$ = this.es.getAllExperience().pipe(takeUntil(this.destroy$));
  titles$ = this.es.getExperienceList('title').pipe(takeUntil(this.destroy$));
  companies$ = this.es
    .getExperienceList('companyName')
    .pipe(takeUntil(this.destroy$));

  codePaths = [
    'components/experience/experience.component.ts',
    'components/experience/experience.component.html',
    'components/experience/experience-header/experience-header.component.ts',
    'components/experience/experience-header/experience-header.component.html',
    'components/experience/experience-detail/experience-detail.component.ts',
    'components/experience/experience-detail/experience-detail.component.html',
  ];

  constructor(
    private readonly es: ExperienceService,
    private readonly route: ActivatedRoute,
    private readonly store: Store,
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
    return this.es.getExperience(id).pipe(
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
