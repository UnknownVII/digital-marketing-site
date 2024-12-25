import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'F3') {
      event.preventDefault();
      this.navigateToLandingPage();
    }
  }

  private navigateToLandingPage() {
    this.router.navigate(['/landing-page']);
  }
}
