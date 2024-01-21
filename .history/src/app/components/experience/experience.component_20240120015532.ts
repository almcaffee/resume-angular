import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ExperienceService } from '../../services/experience.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { EMPTY, Subject, switchMap, takeUntil, tap, timer } from 'rxjs';
import { Position } from '../../models';
import { ExperienceHeaderComponent } from './experience-header/experience-header.component';
import { Store, select } from '@ngrx/store';
import { selectPosition, selectPositions } from '../../store/store.selectors';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ChipModule, ExperienceHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly destroy$ = new Subject<void>();
  jobs$ = this.store.pipe(select(selectPositions()));
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

    // this.store.pipe(select(selectPositions()));
  }

  getExperienceData(id: number) {
    return this.expService.getExperience(id).pipe(
      tap((data: Position) => {
        this.store.dispatch({ type: 'Set Position', payload: data });
        timer(250).subscribe(() => {
          console.log(this.store);
        });
      }),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
