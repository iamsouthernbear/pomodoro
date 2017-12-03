import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor (private _authService: AuthenticationService) { }

  canActivate(): Observable<boolean> {
    return Observable.create(observer => {
      observer.next(this._authService.isAuthorized());
    });
  }
}
