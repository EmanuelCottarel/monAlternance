import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {faHouse, faRightFromBracket, faRepeat, faChartLine, faGear, faUser} from '@fortawesome/free-solid-svg-icons';
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
  faRepeat = faRepeat;
  faChartLine = faChartLine;
  faGear = faGear;
  faUser = faUser;


  logout(){
    this.loginService.logout();
  }

}
