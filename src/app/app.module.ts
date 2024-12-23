import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LazyLoadImageDirective } from './directives/lazy-load-image/lazy-load-image.directive';

@NgModule({
  declarations: [AppComponent, LazyLoadImageDirective],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    LandingPageModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
