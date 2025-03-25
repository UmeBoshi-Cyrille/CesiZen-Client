import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent
    //loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  // Other routes...
];
