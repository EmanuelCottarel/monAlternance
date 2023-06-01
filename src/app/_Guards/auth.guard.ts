import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "../_Services/login.service";
import {inject} from "@angular/core";

export function authGuard(): Boolean {
  return inject(LoginService).isAuthenticated()
}


