import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
