import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../pages/misc/page-not-found/page-not-found.component';
import { MainRedAndPurpleComponent } from './red-and-purple.component';
import { LandingPageComponent } from '../../pages/red-and-purple/landing-page/landing-page.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: MainRedAndPurpleComponent,
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
export class RedAndPurpleRoutingModule {}
