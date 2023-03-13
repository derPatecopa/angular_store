import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getItems() {
    return this.cartItems;
  }
}
