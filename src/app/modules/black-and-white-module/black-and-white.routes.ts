import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../pages/misc/page-not-found/page-not-found.component';
import { LandingPageComponent } from '../../pages/black-and-white/landing-page/landing-page.component';
import { MainBlackAndWhiteComponent } from './black-and-white.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: MainBlackAndWhiteComponent,
    children: [
      {
        path: 'landing-page',
        title: 'Home',
        component: LandingPageComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule],
})
export class BlackAndWhiteRoutingModule {}
