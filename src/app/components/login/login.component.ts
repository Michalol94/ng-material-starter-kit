import { CredentialsRequest } from './../../models/credentials/credentials/credentials.request';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly login: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _authService: AuthService, private _router: Router) {}

  onLoginSubmitted(login: FormGroup): void {
    if (login.invalid) {
      return;
    }
    const credentials: CredentialsRequest = {
      email: login.value.email,
      password: login.value.password,
    };
    this._authService
      .login(credentials)
      .subscribe({ next: () => this._router.navigateByUrl('leads') });
  }
}
