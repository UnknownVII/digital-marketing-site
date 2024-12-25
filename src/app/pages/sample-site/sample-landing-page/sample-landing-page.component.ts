import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-landing-page',
  templateUrl: './sample-landing-page.component.html',
  styleUrl: './sample-landing-page.component.scss',
  standalone: false,
})
export class SampleLandingPageComponent {
  images2: string[] = [];
  message: string = '';
  ngAfterViewInit(): void {
    // Introduce a delay before assigning the images
    setTimeout(() => {
      this.images2 = [
        'assets/sample-site/item-1.jpeg',
        'assets/sample-site/item-2.jpeg',
        'assets/sample-site/item-3.jpeg',
        'assets/sample-site/item-4.jpeg',
        'assets/sample-site/item-5.jpeg',
      ];
    }, 250); // Delay of 500ms
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
