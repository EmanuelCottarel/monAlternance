import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {faHouse, faRightFromBracket, faRepeat, faChartLine} from '@fortawesome/free-solid-svg-icons';
import {LoginService} from "../_Services/login.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {

  constructor(
    private loginService:LoginService,
  ) {
  }

  //FontAwesome
  faHouse = faHouse;
  faRightFromBracket = faRightFromBracket;
  faRepeat = faRepeat
  faChartLine = faChartLine

  logout(){
    this.loginService.logout();
  }

}
