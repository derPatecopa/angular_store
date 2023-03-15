import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[];
  cartPrice: number;

  constructor() {
    this.cartItems=[];
    this.cartPrice=0;
   }

  addToCart(product: Product) {
    product.quantity = Number(product.quantity);
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity = product.quantity;
        //console.log('after for loop: ' + this.cartItems[i].quantity + typeof(this.cartItems[i].quantity));
        return;
      }
    }
    //console.log('type of product quantity ' + typeof(product.quantity));
    this.cartItems.push(product);
    //console.log('without for loop: '+ product.name, product.quantity, typeof(product.quantity))
  }

  getItems() {
    return this.cartItems;
  }

  removeItem(item: Product) {
    if (item.quantity === 0) {
      //searches for the product with 0 quantity
      const index = this.cartItems.indexOf(item);
      //replaces the item at the index position
      this.cartItems.splice(index, 1);
    }
  }

}

