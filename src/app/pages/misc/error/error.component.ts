import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  errorSubtitle: string = '';
  errorMessage: string = '';
  errorTitle: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to changes in query parameters
    this.route.queryParams.subscribe((params) => {
      this.errorTitle = params['title'];
      this.errorSubtitle = params['subtitle'];
      this.errorMessage = params['message'];
      // You can perform additional logic here if needed
    });
  }
}
