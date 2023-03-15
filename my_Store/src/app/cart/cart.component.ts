import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../../models/product';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  totalPrice: number;
  userName: string;
  userAddress: string;
  userCreditCard: string;

  constructor (private cartService: CartService, private userService : UserService) {
    this.totalPrice = 0;
    //calculating initial total price
    this.calcPrice();
    this.userName = "";
    this.userAddress = "";
    this.userCreditCard = "";
  }

  onQuantityChange() {
    // Recalculate the total price when the quantity changes
    for (let i = 0; i< this.items.length; i++) {
      const item = this.items[i];
      if (item.quantity === 0) {
        this.cartService.removeItem(item);
      }
    }
    this.calcPrice();
  }

  calcPrice() {
    // Reset the total price before recalculating it
    this.totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.totalPrice += this.items[i].price * this.items[i].quantity;
    }
    this.totalPrice = Math.round(this.totalPrice * 100) / 100;
    this.userService.userValue = this.totalPrice;
  }

  onSubmit() {
    this.userService.userName = this.userName;
    this.userService.userAddress = this.userAddress;

    console.log(this.userService.userName, this.userService.userAddress);
  }

}
