import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExpDetailComponent } from './components/experience/exp-detail/exp-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    children: [
      {
        path: ':id',
        component: ExpDetailComponent,
      },
    ],
  },
];
