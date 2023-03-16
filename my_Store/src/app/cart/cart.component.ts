import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormGroup,
} from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../../models/product';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  totalPrice: number;
  userName : string;
  userAddress: string;
  userCreditCard = new FormControl();

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {
    this.totalPrice = 0;
    //calculating initial total price
    this.calcPrice();
    this.userAddress = '';
    this.userName = '';
  }

  ngOnInit(): void {
    this.userCreditCard = new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(9),
      Validators.pattern('[0-9]*'),
    ]);


    this.userCreditCard.valueChanges.subscribe(()=>{
      this.checkPatternError();
    })
  }

  onQuantityChange() {
    // Recalculate the total price when the quantity changes
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.quantity === 0) {
        this.cartService.removeItem(item);
        window.alert('Item removed from cart');
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
    //console.log(this.userService.userName, this.userService.userAddress);
  }
  isUserInputInvalid(): boolean {

    return (
      this.userName.length < 5 ||
      this.userAddress.length < 5 ||
      this.userCreditCard.invalid
    );
  }

  checkPatternError() {
    if (this.userCreditCard.errors?.['pattern']) {
      this.userCreditCard.setValue('');
    }
  }
}
