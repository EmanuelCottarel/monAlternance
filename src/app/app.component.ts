import { Component } from '@angular/core';

import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router : Router) {
  }

  title = 'monAlternance';

  userData= {
    email: localStorage.getItem('email'),
    id: localStorage.getItem('id'),
    jwt: localStorage.getItem('jwt'),
  }

  autoConnect() {
    return this.userData.jwt != null;
  }

  ngOnInit() {
    if (this.autoConnect()) {
      this.router.navigate(['/dashboard'])
    }
  }
}

//Verifier si i ly a le token sinon on renvoi vers login
