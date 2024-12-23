import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-page.routes';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainLandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [MainLandingPageComponent],
  imports: [CommonModule, LandingRoutingModule, RouterModule, SharedModule],
})
export class LandingPageModule {}
