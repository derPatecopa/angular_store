import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

}

getAllProducts() {
  return this.http.get('assets/data.json');
}

getProductById(id: number) {
 return this.http.get<Product[]>('assets/data.json').
 pipe(map(products => products.find(p => p.id === id))
 )
}

}
