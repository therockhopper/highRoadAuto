import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './authentication.guard';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService
  ],
  exports: [
    RouterModule,
    LoginComponent,
  ]
})
export class AuthenticationModule { }
