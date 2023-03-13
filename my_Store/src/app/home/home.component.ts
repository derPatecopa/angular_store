import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../../models/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) { }
  productList:Product[] = [];
  ngOnInit(): void {
    this.productService
    .getAllProducts()
    .subscribe((products) => {
      this.productList = products as Product[];
    });
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    if (this.cartService.cartItems.length > 0) {
      window.alert('Product added to cart');
    }
  }

}
