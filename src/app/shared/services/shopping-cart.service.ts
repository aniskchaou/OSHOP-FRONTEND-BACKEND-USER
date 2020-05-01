import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from '../models/product.model';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartItem } from '../models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  
  itemCount
  
  async clearCart() {
    let cartID=await this.getOrCreateCartID();
    //get item fromdb by id
    console.log(cartID);
    
   return this.db.object('/shopping-cart/'+cartID+'/items').remove();
   
  }

  async removeToCart(product: Product) {
    let cartID=await this.getOrCreateCartID();
    //get item fromdb by id
    let item=this.db.object('/shopping-cart/'+cartID+'/items/'+product.$key);
     
    item.take(1).subscribe(it=>{
      console.log("q"+it.quantity);
      if(it.quantity==1)
       {
        item.remove();
       } else
       {
         //product exists
        if(it.$exists())
        {
          //update
         item.update({quantity:it.quantity-1});
        }else{
          //add
          item.set({product:product,quantity:1});
        }
       } 
       
     });
  }

  constructor(private db:AngularFireDatabase) { }

  
  private create()
  {
    return this.db.list("shopping-cart").push({
      dateCreated:new Date().getTime()
    });
  }

   async getCart():Promise<FirebaseObjectObservable<ShoppingCart>>
  {
    let cardID= await this.getOrCreateCartID();
    return this.db.object('/shopping-cart/'+cardID);
  }

  private getOrCreateCartID()
  {
    //cardID from storage
    let cartId=localStorage.getItem('cardID');
    
    //dont have shpping cart
    if(!cartId)
    {
      //create cart to DB
      this.create().then(result=>{
        localStorage.setItem("cardID",result.key);
        return result.key;
      });

    }
      //already have cardID
      return cartId;
    
  }

  async addToCart(product:Product)
  {
    let cartID=await this.getOrCreateCartID();
    //get item fromdb by id
    let item=this.db.object('/shopping-cart/'+cartID+'/items/'+product.$key);
    
    item.take(1).subscribe(it=>{
       //product exists
        if(it.$exists())
        {
          //update
         item.update({quantity:it.quantity+1});
        }else{
          //add
          item.set({product:product,quantity:1});
        }
     });

  }

}
