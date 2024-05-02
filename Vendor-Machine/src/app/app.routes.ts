import { Route } from '@angular/router';
import { VendingMachineComponent } from './shared/lib';


export const appRoutes: Route[] = [
  {
    path: '',
    component: VendingMachineComponent,
  },
  { path: '**', redirectTo: 'error/404' },
];
