import { Routes } from '@angular/router';
import { ExpDetailComponent } from './experience-detail/experience-detail.component';

export const expChildRoutes: Routes = [
  {
    path: ':id',
    component: ExpDetailComponent,
  },
];
