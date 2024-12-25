import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../pages/misc/page-not-found/page-not-found.component';
import { SampleLandingPageComponent } from '../../pages/sample-site/sample-landing-page/sample-landing-page.component';
import { MainSamplePageComponent } from './sample-landing-page.component';
import { SampleMenuPageComponent } from '../../pages/sample-site/sample-menu-page/sample-menu-page.component';
import { SampleHighlightsPageComponent } from '../../pages/sample-site/sample-highlights-page/sample-highlights-page.component';
import { SampleAboutUsPageComponent } from '../../pages/sample-site/sample-about-us-page/sample-about-us-page.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: MainSamplePageComponent,
    children: [
      {
        path: 'home',
        title: 'Home',
        component: SampleLandingPageComponent,
      },
      {
        path: 'menu',
        title: 'Menu',
        component: SampleMenuPageComponent,
      },
      {
        path: 'highlights',
        title: 'Highlights',
        component: SampleHighlightsPageComponent,
      },
      {
        path: 'about-us',
        title: 'About us',
        component: SampleAboutUsPageComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule],
})
export class SampleLandingRoutingModule {}
