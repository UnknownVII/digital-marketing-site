import { Component } from '@angular/core';
import { PATHS } from '../../common/paths';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: false,
})
export class LandingPageComponent {
  paths = PATHS; // Assign the imported paths to a property
}
