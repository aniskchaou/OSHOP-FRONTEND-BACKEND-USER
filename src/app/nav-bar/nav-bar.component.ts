import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAdmin = false;
  itemCount
  constructor(public authService: AuthService, private userService: UserService,private shoppingCart:ShoppingCartService) {

  }

  async ngOnInit() {
    
    this.authService.initUser();

    this.authService.authF.authState.subscribe(user => {
      if (user) {
        let userDataBase = this.userService.getUser(user.uid);
        userDataBase.subscribe(u => {
          this.isAdmin = u.isAdmin;
        });
      }
    });
    let cart=await this.shoppingCart.getCart();
    cart.subscribe(cart=>{
      this.itemCount=0;
       for(let productID in cart.items)
       {
         this.itemCount+=cart.items[productID].quantity;
       }
    });
     this.shoppingCart.itemCount=this.itemCount;

  }

  logout() {
    this.authService.logout();
  }

}
