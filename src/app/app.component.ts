import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <app-toaster></app-toaster>
      <router-outlet></router-outlet>
    </ng-container>
  `,
})
export class AppComponent {
  title = 'shopify-forgot-pass-project';
}
