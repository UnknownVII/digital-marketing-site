import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Check if the route was internally triggered
    if (state.root.queryParams['internal'] === 'true') {
      return true;
    } else {
      // Redirect to the default route
      return this.router.createUrlTree(['/']);
    }
  }
}
