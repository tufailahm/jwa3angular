import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { retry } from 'rxjs/operators'

const productUrl = "http://localhost:9090/product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  //DI
  constructor(public httpClient: HttpClient) { }

  //getting all the products
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productUrl)
      .pipe(
        retry(0)
      )
  }

  //getting a single product
  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${productUrl}/${productId}`)
      .pipe(
        retry(0)
      )
  }

  //deleting a single product
  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${productUrl}/${productId}`)
      .pipe(
        retry(2)
      )
  }

  //saving a single product
  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(productUrl, product, this.httpOptions)
      .pipe(
        retry(0)
      )
  }

  //saving a single product
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(productUrl, product, this.httpOptions)
      .pipe(
        retry(0)
      )
  }
}
