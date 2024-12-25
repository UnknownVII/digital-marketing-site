import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSamplePageComponent } from './sample-landing-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SampleLandingPageComponent } from '../../pages/sample-site/sample-landing-page/sample-landing-page.component';
import { SampleLandingRoutingModule } from './sample-landing-page.routes';
import { SampleAboutUsPageComponent } from '../../pages/sample-site/sample-about-us-page/sample-about-us-page.component';
import { SampleHighlightsPageComponent } from '../../pages/sample-site/sample-highlights-page/sample-highlights-page.component';
import { SampleMenuPageComponent } from '../../pages/sample-site/sample-menu-page/sample-menu-page.component';

@NgModule({
  declarations: [
    MainSamplePageComponent,
    SampleLandingPageComponent,
    SampleAboutUsPageComponent,
    SampleHighlightsPageComponent,
    SampleMenuPageComponent,
  ],
  imports: [
    CommonModule,
    SampleLandingRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class SamplePageModule {}
