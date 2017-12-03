import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public notValidCredentials = false;
  public showUsernameHint = false;

  constructor(public formBuilder: FormBuilder,
              private _router: Router,
              private _authService: AuthenticationService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    const username = this.loginForm.controls['username'];
    username.valueChanges.subscribe(value => {
      this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
    });
  }

  ngOnInit() {
  }

  public authenticate(): void {
    const credentials = this.loginForm.value;
    this.notValidCredentials = !this.notValidCredentials && this.loginForm.dirty;

    this._authService.login(credentials)
      .subscribe(response => {
        if (response) {
          this._router.navigate(['/']);
        } else {
          this.notValidCredentials = true;
        }
      });
  }
}
