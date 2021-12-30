import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm?: FormGroup;
  productId: number = -1;
  product: Product;

  constructor(public activatedRoute: ActivatedRoute, public productService: ProductService, public formBuilder: FormBuilder, public router: Router) { }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    console.log('Product id in params :' + this.productId);

    if (this.productId == -1) {
      //save
      this.productForm = this.formBuilder.group({
        productId: ['', Validators.required],
        productName: ['', [Validators.required, Validators.minLength(5)]],
        quantityOnHand: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(1)]],
      })
    }
    else {
      //edit
      this.productService.getProduct(this.productId).subscribe((data: any) => {
        console.log("####Product retrieved successfully :" + data)
        this.product = data;
        this.productForm = this.formBuilder.group({
          productId: [this.product.productId, Validators.required],
          productName: [this.product.productName, [Validators.required, Validators.minLength(5)]],
          quantityOnHand: [this.product.quantityOnHand, Validators.required],
          price: [this.product.price, [Validators.required, Validators.min(1)]],
        })
      }, error => {
      })


    }


  }

  saveEditProduct() {
    if (this.productId == -1) {
      //save
      console.log(this.productForm.value)
      this.productService.saveProduct(this.productForm.value).subscribe((data: any) => {
        console.log("####Product saved successfully :")
      }, error => {
        this.router.navigate(['listProduct'])
      })
    }
    else {
      //edit
      this.productService.updateProduct(this.productForm.value).subscribe((data: any) => {
        console.log("####Product updated successfully :")
      }, error => {
        this.router.navigate(['listProduct'])
      })
    }
  }
}
