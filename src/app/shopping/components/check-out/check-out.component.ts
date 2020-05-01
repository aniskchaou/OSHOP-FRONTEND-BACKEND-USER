import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthGuardService } from '../../../shared/services/authguard.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../shared/services/order.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartItem } from '../../../shared/models/shopping-cart-item';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  shipping={}
  cart:ShoppingCart
  subscription:Subscription
  listItems:any[]=[]
  constructor(private guardService:AuthGuardService
    ,private shoppingCartService:ShoppingCartService
    ,private orderService:OrderService
    ,private authService:AuthService
    ,private router:Router ) { }

  async ngOnInit() {
    let cart=await this.shoppingCartService.getCart();
    this.subscription=cart.subscribe(cart=>this.cart=cart);
    
  }

 async placeOrder()
  {
   /* console.log(this.cart.items);
    (this.cart.items as Array<ShoppingCartItem>).map(i=>{
      console.log(i);
      }
    );*/
    for(let it in this.cart.items)
    {
      this.listItems.push(this.cart.items[it]);
      console.log(it);
    }

     let order={
       userId:this.authService.user.uid,
      datePlaced:new Date().getTime(),
      shipping:this.shipping,
      items:this.listItems.map(i=>{
        return {
          product:{
            title:i.product.title,
            image:i.product.image,
            price:i.product.price
          },
          quantity:i.quantity
        }
      })
    };

    
    let result=await this.orderService.saveOrder(order);
     this.router.navigate(['/order-success/',result.key])
  }
}
