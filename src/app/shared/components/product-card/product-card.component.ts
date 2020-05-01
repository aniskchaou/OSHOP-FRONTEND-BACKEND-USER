import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import 'rxjs/add/operator/take';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product')
  product:Product;
  @Input('shopping-cart')
  shoppingcart;

  
  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product:Product)
  {
     this.shoppingCart.addToCart(product);
  }

  removeToCart(product:Product)
  {
    this.shoppingCart.removeToCart(product);
  }
  getQuantity()
  {
    if(!this.shoppingcart) return 0;
   if(!this.shoppingcart.items) return 0;
    let item = this.shoppingcart.items[this.product.$key];
    console.log(item);
   if(item)
    {
      return item.quantity;
    }else
    {
      return 0;
    }
  }
}
