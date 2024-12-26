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
    loadChildren: () =>
      import('./modules/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'timi-and-tomas',
    title: 'Timi and Tomas',
    loadChildren: () =>
      import('./modules/sample-page/sample-landing-page.module').then(
        (m) => m.SamplePageModule
      ),
  },

  {
    path: 'red-and-purple',
    title: 'Landing Page',
    // canActivate: [UnauthGuard],
    loadChildren: () =>
      import('./modules/red-and-purple-module/red-and-purple.module').then(
        (m) => m.RedAndPurpleModule
      ),
  },
  {
    path: 'black-and-white',
    title: 'Landing Page',
    // canActivate: [UnauthGuard],
    loadChildren: () =>
      import('./modules/black-and-white-module/black-and-white.module').then(
        (m) => m.BlackAndWhiteModule
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
  { path: '**', component: PageNotFoundComponent },
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
