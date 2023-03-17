import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cart: string;
  product: string;

  @Output() productClicked = new EventEmitter<void>();
  @Output() cartClicked = new EventEmitter<void>();

  constructor() {
    this.cart = 'Cart';
    this.product = 'Product';
  }

  onProductClick() {
    this.productClicked.emit();
  }

  onCartClick() {
    this.cartClicked.emit();
  }
}
