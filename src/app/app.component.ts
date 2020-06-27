import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

//decorator appcomponent
@Component({
  selector: 'app-root', //tag
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.css'] //ccs
})


export class AppComponent {

   
  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
    //authentification
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
