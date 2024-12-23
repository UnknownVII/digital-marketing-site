// role.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { BaseService } from '../../services/base/base.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoaderService } from '../../services/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _base: BaseService,
    private _loader: LoaderService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const expectedRole = next.data['expectedRole']; // Retrieve expected role from route data
    const userRole = this._auth.getRole();
    this._loader.showLoader();
    // Check if user is authenticated and has a token
    if (!this._auth.getToken()) {
      this._router.navigate(['/landing-page']);
      this._loader.hideLoader();
      return of(false);
    }

    // Check token validity using BaseService
    return this._base.requestObservable('post', 'v1/check-token', null).pipe(
      map((res: any) => {
        if (res && res.message === 'Token is valid') {
          // Check if user's role matches the expected role
          if (userRole && userRole === expectedRole) {
            // Allow access to the route
            this._loader.hideLoader();

            return true;
          } else {
            // Redirect to appropriate route based on user role
            this._router.navigate([`/${userRole}`]); // Redirect to user's role route
            this._loader.hideLoader();

            return false;
          }
        } else {
          // Token is not valid or other error, navigate to login-expired page
          this._router.navigate(['login-expired'], {
            queryParams: { internal: 'true' },
          });
          this._loader.hideLoader();
          return false;
        }
      }),
      catchError(() => {
        // Handle error from HTTP request (e.g., network error)
        // Redirect to landing page or handle appropriately
        this._router.navigate(['/landing-page']);
        this._loader.hideLoader();

        return of(false);
      })
    );
  }
}
