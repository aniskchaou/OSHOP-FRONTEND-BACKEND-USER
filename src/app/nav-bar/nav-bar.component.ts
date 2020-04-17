import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAdmin=false;
  constructor(public authService:AuthService,private userService:UserService) { 
    
  }
   
  ngOnInit() {
    this.authService.isConnected();
    
    this.authService.authF.authState.subscribe(user=>{
     if(user)
     {
      let userDataBase=this.userService.getUser(user.uid);
      userDataBase.subscribe(u=>{
        this.isAdmin=u.isAdmin;
      });
     }
    });
   /// let isAdmin=this.userService.getUser(uid);
   
  }

  logout()
  {
    this.authService.logout();
  }

}
