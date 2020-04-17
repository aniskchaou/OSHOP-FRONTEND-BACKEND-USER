import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
    this.saveUserInformations();
  }

  //save user into DB
  saveUserInformations() {
    this.authService.authF.authState
      .subscribe(user => {
        if (user) {
          this.userService.saveUser(user);
        }
      });
  }
}
