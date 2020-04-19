import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  

  products:Product[]=[];
  cart:any;
  category;
  subscription:Subscription;
  filteredProducts:Product[];
  constructor(private shoppingCart:ShoppingCartService,private productService:ProductService,private route:ActivatedRoute){
    this.productService.getAll().subscribe(products=>{this.products=products
      
     
      
    this.route.queryParamMap.subscribe(params=>{
      this.category=params.get('category');
      
      if(this.category)
      {
       this.filteredProducts=this.products.filter(p => p.category === this.category)
      }else
      {
        this.filteredProducts=this.products;
        console.log(this.products)
        console.log(this.filteredProducts)
      }
    
        
      
    });
    });

   }

  async ngOnInit() {
    this.subscription=(await this.shoppingCart.getCart()).subscribe(cart=>this.cart=cart);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
