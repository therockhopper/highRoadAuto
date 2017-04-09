import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication/authentication.guard'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
