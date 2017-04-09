import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url
    return this.checkLogin(url)
  }

  checkLogin(url: string):boolean {
    if ( this.authService.isLoggedIn ) { return true }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url

    // Navigate to the login page with extras
    this.router.navigate(['/login'])
    return false
  }
}
