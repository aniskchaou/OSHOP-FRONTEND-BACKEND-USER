import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
   

    constructor(public items:ShoppingCartItem[])
    {

    }

    getProduitIds(items)
    {
        console.log(items);
      return Object.keys(items);
    }
}