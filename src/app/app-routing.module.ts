import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContainerComponent} from "./container/container.component";
import {authGuard} from "./_Guards/auth.guard"
import {ReminderComponent} from "./reminder/reminder.component";
import {SettingsComponent} from "./settings/settings.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '', component: ContainerComponent, canActivate: [authGuard], children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
      {path: 'reminder', component: ReminderComponent, canActivate: [authGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
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
