import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) {

}

getAllProducts() {
  return this.http.get('assets/data.json');
}



}
