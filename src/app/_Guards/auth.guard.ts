import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "../_Services/login.service";
import {inject} from "@angular/core";

// export function authGuard = () => inject(LoginService).isAuthenticated()

export function authGuard(): CanActivateFn {
  return () => {
    const loginService: LoginService = inject(LoginService);
    const router: Router = inject(Router);
    if(!loginService.isAuthenticated()){
      router.navigate(['/login']);
      return false
    }
   return true
  }
}


