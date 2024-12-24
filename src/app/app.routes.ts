import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/misc/page-not-found/page-not-found.component';
import { ErrorComponent } from './pages/misc/error/error.component';
import { RefreshGuard } from './guards/refresh-error/refresh-error.guard';
import { ErrorGuard } from './guards/error/error.guard';
import { UnauthGuard } from './guards/unauth/unauth.guard';

export const routes: Routes = [
  {
    path: 'landing-page',
    title: 'Landing Page',
    // canActivate: [UnauthGuard],
    loadChildren: () =>
      import('./modules/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate: [RefreshGuard],
  },
  ///MISC HANDLING
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'null', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Catching for undefined routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      errorHandler(error) {
        console.error(error);
      },
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
