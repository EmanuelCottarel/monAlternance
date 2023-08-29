import {Component, OnInit} from '@angular/core';
import {UserService} from "../_Services/user.service";
import {UserProfileData} from "../_Interfaces/user-profile-data";

@Component({
             selector: 'app-profile',
             templateUrl: './profile.component.html'
           })
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  userProfileData!: UserProfileData

  ngOnInit() {
    this.userService.getUserData().subscribe(data => this.userProfileData = data)
  }

}
