import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public userIsLoggedIn: boolean;

  constructor(private _authService: AuthenticationService,
              private _router: Router) {
    this._authService.userIsLoggedIn
      .subscribe(isLoggedIn => {
        this.userIsLoggedIn = isLoggedIn;
      });
  }

  public logout($event): void {
    $event.preventDefault();
    this._authService.logout()
      .subscribe(succses => {
        if (succses) {
          this._router.navigate(['/']);
        }
      });
  }
}
