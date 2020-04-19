import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../shopping-cart';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'shopping-card-summary',
  templateUrl: './shopping-card-summary.component.html',
  styleUrls: ['./shopping-card-summary.component.css']
})
export class ShoppingCardSummaryComponent implements OnInit,OnDestroy {
  
  total:number=0
  cart:ShoppingCart;
  listItems:any[]=[]
  subscription:Subscription

  constructor(private shoppingCartService:ShoppingCartService,
    private shoppingcart:ShoppingCartService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  async ngOnInit() {
    let cart=await this.shoppingCartService.getCart();
    this.subscription=cart.subscribe(cart=>{
      this.cart=cart
      for(let it in this.cart.items)
    {
      this.listItems.push(this.cart.items[it]);
      console.log(it);
    }
    });
   
  
  }

  

}
