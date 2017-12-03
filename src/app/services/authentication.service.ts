import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  public userIsLoggedIn: EventEmitter<boolean>;

  constructor() {
    this.userIsLoggedIn = new EventEmitter();
  }

  public isAuthorized(): boolean {
    return !!window.sessionStorage.getItem('token');
  }

  public login ({ username, password }): Observable<boolean> {
    return Observable.create(observer => {
      let validCredentials = false;
      if (username === 'john.doe@gmail.com' &&
          password === 'letmein') {
        validCredentials = true;
        window.sessionStorage.setItem('token', 'qwerty');
      }
      this.userIsLoggedIn.emit(validCredentials);
      observer.next(validCredentials);
    });
  }

  public logout(): Observable<boolean> {
    return Observable.create(observer => {
      window.sessionStorage.removeItem('token');
      this.userIsLoggedIn.emit(false);
      observer.next(true);
    });
  }

}
