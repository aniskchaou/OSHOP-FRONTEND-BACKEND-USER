import { Product } from './product.model';

export interface ShoppingCartItem{
    product:Product;
    quantity:number;
}