import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  successMessage?: string;

  //DI
  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.refreshProducts();
  }

  deleteProduct(productId: any) {
    this.productService.deleteProduct(productId).subscribe((data: any) => {
      console.log("####Product deleted successfully :")
      this.refreshProducts();
      this.successMessage = "Product deleted successfully "
    })
  }


  refreshProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      console.log("####Products recieved from spring :")
      console.log(data)
      this.products = data;
    })
  }


  //display the add product form
  addProduct() {
    this.router.navigate(['addProduct','-1'])
  }

  editProduct(productId: any) {
    //navigate to add product component with productId
    this.router.navigate(['addProduct', productId])
  }
}
