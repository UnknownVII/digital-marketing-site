import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RedAndPurpleRoutingModule } from './red-and-purple.routes';
import { MainRedAndPurpleComponent } from './red-and-purple.component';

@NgModule({
  declarations: [MainRedAndPurpleComponent],
  imports: [
    CommonModule,
    RedAndPurpleRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class RedAndPurpleModule {}
