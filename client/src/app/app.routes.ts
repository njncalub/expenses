import { Routes } from '@angular/router';

import { MwsHomeComponent } from './mws-home/mws-home.component';

export const appRoutes: Routes = [
  // {
  //   path: 'crisis-center',
  //   component: CrisisListComponent,
  // },
  // {
  //   path: 'hero/:id',
  //   component: HeroDetailComponent,
  // },
  {
    path: 'home',
    component: MwsHomeComponent,
    data: {
      title: 'Home',
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

