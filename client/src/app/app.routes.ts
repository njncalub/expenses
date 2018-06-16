import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwsHomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: MwsHomeComponent,
    data: {
      title: 'Home',
    },
  },
  {
    path: 'wallets/:id',
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

export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(
  appRoutes,
  {
    // enableTracing: true,
  }
);
