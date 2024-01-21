import { Routes } from '@angular/router';
import { ExpDetailComponent } from './exp-detail/exp-detail.component';

export const expChildRoutes: Routes = [
  {
    path: ':id',
    component: ExpDetailComponent,
  },
];
