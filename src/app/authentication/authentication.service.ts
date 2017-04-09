import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthenticationService {
  isLoggedIn: boolean = true

  // store the URL so we can redirect after loggin in
  redirectUrl: string

  constructor() { }

  login(): Observable<boolean> {
    this.isLoggedIn = true
    console.log(`user is now logged in ${this.isLoggedIn}`)
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
