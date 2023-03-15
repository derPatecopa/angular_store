import { Component } from '@angular/core';
import {Product} from '../../models/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent {
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
      quantity: 0
    }
  }
  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
    this.productService
    .getProductById(parseInt(idString))
    .subscribe((product) => {
      this.product = product as Product;
    })};
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
      window.alert('Product added to cart');

  }

}
