import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContainerComponent} from "./container/container.component";
import {authGuard} from "./_Guards/auth.guard"

const routes: Routes = [
  {
    path: '', component: ContainerComponent, canActivate: [authGuard], children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}
    ]
  },
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path:'**', redirectTo:'/login'}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
