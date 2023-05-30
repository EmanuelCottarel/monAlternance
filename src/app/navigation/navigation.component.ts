import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {faCoffee, faHouse, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {

  constructor(
    private router: Router
  ) {
  }

  //FontAwesome
  faHouse = faHouse;
  faRightFromBracket = faRightFromBracket;

  logout() : Promise<Boolean>   {
    localStorage.clear()
    return this.router.navigate(['/login'])
  }

  protected readonly faCoffee = faCoffee;
}
