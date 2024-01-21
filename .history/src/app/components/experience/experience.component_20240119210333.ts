import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ExperienceService } from '../../services/experience.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { expChildRoutes } from './experience.routes';
import { EMPTY, filter, map, switchMap, tap } from 'rxjs';
import { Experience, Position } from '../../models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ChipModule, SectionHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  jobs$ = this.expService.getAllExperience();
  titles$ = this.expService.getExperienceList('title');
  companies$ = this.expService.getExperienceList('companyName');
  constructor(
    private readonly expService: ExperienceService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd && !!route.firstChild?.params,
        ),
        map(() => route.firstChild!.params as Params),
        switchMap(({ id }) => (id ? this.getExperienceData(id) : EMPTY)),
      )
      .subscribe();
  }

  ngOnInit() {
    const { id } = this.route.firstChild!.params as Params;
    console.log(id);
    if (id) {
      console.log(id);
      this.expService.getExperience(id).subscribe();
    }
  }

  getExperienceData(id: number) {
    return this.expService.getExperience(id).pipe(
      tap((data: Position) => {
        console.log(data);
      }),
    );
  }
}
