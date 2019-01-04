import { Injectable } from '@angular/core';
import * as jws_decode from 'jwt-decode';
import { Subject } from 'rxjs';

import { TokenService } from './../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new Subject<User>();

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jws_decode(token) as User;
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
