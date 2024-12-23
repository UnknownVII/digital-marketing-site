import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { BaseService } from '../../services/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class DataExistsGuard {
  constructor(
    private _auth: AuthService,
    private _rt: Router,
    private _base: BaseService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
  > {
    if (this._auth.getToken()) {
      this._base
        .requestPromise('post', 'v1/check-token', null)
        .then((res: any) => {
          if (res.message == 'Token is valid') {
            return false;
          } else {
            this._rt.navigate(['login-expired'], {
              queryParams: { internal: 'true' },
            });
            return false;
          }
        });
    }
    return false;
  }
}
