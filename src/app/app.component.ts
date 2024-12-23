import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <app-toaster></app-toaster>
      <router-outlet></router-outlet>
    </ng-container>
  `,
  standalone: false,
})
export class AppComponent {
  title = 'shopify-forgot-pass-project';
}
