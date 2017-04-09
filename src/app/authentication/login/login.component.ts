import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'pc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : ''
        // Redirect the user
        this.router.navigate([redirect]);
      }
    })
  }

}
