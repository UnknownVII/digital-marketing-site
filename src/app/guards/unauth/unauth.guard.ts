import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { BaseService } from '../../services/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard {
  constructor(
    private _auth: AuthService,
    private _base: BaseService,
    private _rt: Router
  ) {}

  canActivate() {
    if (this._auth.getToken()) {
      const params = { type: 'header', token: null };
      this._base.requestPromise('post', 'v1/check-server').then((res: any) => {
        if ((res.message = 'Server is alive and kicking')) {
          this._base
            .requestPromise('post', 'v1/check-token')
            .then((res: any) => {
              if (res.message === 'Token is valid') {
                try {
                  this._auth.login();
                } catch (error) {
                  this._rt.navigate(['login-expired'], {
                    queryParams: { internal: 'true' },
                  });
                }
              } else {
                this._rt.navigate(['login-expired'], {
                  queryParams: { internal: 'true' },
                });
              }
            });
        }
      });
      return false;
    } else {
      return true;
    }
  }
}
