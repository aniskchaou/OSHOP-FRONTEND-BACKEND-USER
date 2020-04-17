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
  title = 'organicShop';

  constructor(private authService:AuthService,router:Router,userService:UserService)
  {
    this.authService.authF.authState
    .subscribe(user=>{
     if(user)
     {
        userService.saveUser(user);
     }
    });
  }
}
