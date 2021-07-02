import { Component } from '@angular/core';
import { UserLogin } from '../../shared/models/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public credential: UserLogin;

  constructor() {
    this.credential = Object.assign({} as UserLogin, {});
  }
}
