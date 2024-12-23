import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RefreshGuard {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const customerId = localStorage.getItem('customerId');
    const resetUrl = localStorage.getItem('resetToken');
    const isRefreshTokenUsed = localStorage.getItem('isResetTokenUsed');

    // Check if customerId and resetUrl exist and if isRefreshTokenUsed is false
    if (customerId && resetUrl && isRefreshTokenUsed === 'false') {
      // Redirect to forgot-password page with query params
      this.router.navigate(['auth/forgot-password'], {
        queryParams: {
          customer_id: customerId,
          reset_url: resetUrl,
        },
      });
      return false;
    }

    // Proceed with navigation
    return true;
  }
}
