import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginFormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
