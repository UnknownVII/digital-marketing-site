import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-page',
  template: ` <div class="container">
    <div
      class="header"
      [ngClass]="{
        scrolled: isScrolled,
        'menu-open': onClick
      }"
    >
      <div class="contain-header">
        <img
          [src]="
            !onClick
              ? isScrolled
                ? 'assets/sample-site/minified-logo.svg'
                : 'assets/sample-site/main-logo.svg'
              : 'assets/sample-site/main-logo-orange.svg'
          "
          alt="main-logo"
          [ngClass]="{ 'scrolled-logo': isScrolled }"
          (click)="scrollToTop()"
        />
        <div class="button-container" (click)="onClickMenu()">
          <i class="fas {{ onClick ? 'fa-close' : 'fa-bars' }}"></i>
        </div>
      </div>
      <div *ngIf="onClick" class="menu-items">
        <ul>
          <li
            (click)="onClickMenu()"
            [class.isActive]="currentPath.includes('/home')"
            [routerLink]="'/timi-and-tomas/home'"
          >
            HOME
          </li>
          <li
            (click)="onClickMenu()"
            [class.isActive]="currentPath.includes('/menu')"
            [routerLink]="'/timi-and-tomas/menu'"
          >
            MENU
          </li>
          <li
            (click)="onClickMenu()"
            [class.isActive]="currentPath.includes('/highlights')"
            [routerLink]="'/timi-and-tomas/highlights'"
          >
            HIGHLIGHTS
          </li>
          <li
            (click)="onClickMenu()"
            [class.isActive]="currentPath.includes('/about-us')"
            [routerLink]="'/timi-and-tomas/about-us'"
          >
            ABOUT US
          </li>
        </ul>
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>`,
  standalone: false,
  styleUrl: './sample-landing-page.component.scss',
})
export class MainSamplePageComponent {
  isScrolled = false;
  onClick = false;
  currentPath: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Get the current path on initialization
    this.currentPath = this.router.url;
    console.log('Current Path:', this.currentPath); // Log or use the current path as needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const shouldBeScrolled = scrollPosition > 0;

    this.isScrolled = shouldBeScrolled;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  onClickMenu(): void {
    this.onClick = !this.onClick;
    this.currentPath = this.router.url;
    if (this.onClick) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      this.scrollToTop();
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  }
}
