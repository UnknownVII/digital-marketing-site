import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { PageNotFoundComponent } from '../pages/misc/page-not-found/page-not-found.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CamelCasePipe } from './pipes/camel.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { SnakeCasePipe } from './pipes/snake.pipe';
import { TimingPipe } from './pipes/timing.pipe';
import { SlicePipe } from './pipes/splice.pipe';
import { FormInputUpdatedComponent } from './components/text-input-form/form-input-updated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TestComponent } from './components/test/test.component';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { InjectionToken } from '@angular/core';
import { BaseService } from '../services/base/base.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from '../services/loader/loader.service';
import { AuthService } from '../services/auth/auth.service';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { PopUpService } from '../services/pop-up/pop-up.service';
import { CustomDateAdapter } from './adapters/custom-date-adapter';
import { MatMenuModule } from '@angular/material/menu';

const COMPONENTS: any = [
  PageNotFoundComponent,
  FormInputUpdatedComponent,
  LandingPageComponent,
  TestComponent,
  ToasterComponent,
  LoaderComponent,
  PopUpComponent,
];
const MAT_MODULES: any = [
  MatTooltipModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule,
];
const MODULES: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];
const PIPES: any = [
  CapitalizePipe,
  NumberWithCommasPipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  SlicePipe,
  CamelCasePipe,
  SnakeCasePipe,
  DateFormatPipe,
];
const PROVIDERS: any = [BaseService, AuthService, LoaderService, PopUpService];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  providers: [
    ...PROVIDERS,
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  imports: [...MODULES, ...MAT_MODULES, ...COMPONENTS, ...PIPES],
  exports: [...MODULES, ...MAT_MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
