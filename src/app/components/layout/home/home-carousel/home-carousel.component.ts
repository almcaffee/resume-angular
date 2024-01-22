import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CarouselModule } from 'primeng/carousel';
import {
  selectLanguages,
  selectPositions,
} from '../../../../store/store.selectors';
import { ExpType, Experience, Position } from '../../../../models';
import { combineLatest, map, switchMap, tap } from 'rxjs';
import { ExperienceService } from '../../../../services/experience.service';
import { addLanguages, addPositions } from '../../../../store/store.actions';
import { PositionCardComponent } from '../../../cards/position-card/position-card.component';
import { LanguageService } from '../../../../services/language.service';
import { ExperienceCardComponent } from '../../../cards/experience-card/experience-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    PositionCardComponent,
    ExperienceCardComponent,
  ],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  @Input() type: 'position' | 'experience' = 'position';
  languages: Array<Experience> = [];
  positions: Array<Position> = [];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  constructor(
    private readonly es: ExperienceService,
    private readonly ls: LanguageService,
    private readonly store: Store,
  ) {
    combineLatest([this.es.getAllExperience(), this.ls.getLanguages()])
      .pipe(
        tap(([positions, languages]) => {
          this.store.dispatch({
            type: '[Experience Component] Set Positions',
            positions,
          });
          this.store.dispatch({
            type: '[Experience Component] Set Languages',
            languages,
          });
        }),
        switchMap(() =>
          combineLatest([
            this.store.pipe(select(selectPositions())),
            this.store.pipe(select(selectLanguages())),
          ]),
        ),
      )
      .subscribe(([positions, languages]) => {
        console.log(positions);
        console.log(languages);
        this.positions = positions;
        this.languages = languages;
      });
  }
}
