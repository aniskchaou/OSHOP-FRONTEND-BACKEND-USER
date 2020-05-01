import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
   
    public items:ShoppingCartItem[]
    constructor()
    {

    }

    getProduitIds(items)
    {
        console.log(items);
      return Object.keys(items);
    }
}