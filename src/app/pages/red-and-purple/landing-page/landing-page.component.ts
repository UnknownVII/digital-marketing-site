import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  isClicked = false;

  // Toggle the animation class
  toggleAnimation() {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }
}
