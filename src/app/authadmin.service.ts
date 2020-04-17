import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthAdminService implements CanActivate {
 
  constructor(private authService:AuthService,private userService:UserService) { }

  canActivate():Observable<boolean>
  {
    return  this.authService.authF.authState
    .switchMap(user=> this.userService.getUser(user.uid))
      .map(appUser=>appUser.isAdmin);

    
  }
}
