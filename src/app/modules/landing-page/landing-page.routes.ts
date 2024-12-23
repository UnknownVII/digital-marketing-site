import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../pages/misc/page-not-found/page-not-found.component';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
