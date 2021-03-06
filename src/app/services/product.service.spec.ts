
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
let productService: ProductService;
let httpMock: HttpTestingController;
let injector: TestBed;
describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    injector = getTestBed();
    productService = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
  });
  let productData = 
    { "productId": 678 , "productName": 'Compaq', "quantityOnHand": 100, "price": 33000 }

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });
  it('getProduct() should return single product ', () => {
    productService.getProduct(678).subscribe((data) => {
      expect(data).toEqual(productData);
    });
    const req = httpMock.expectOne('http://localhost:9090/product/678');
    expect(req.request.method).toBe('GET');
    req.flush(productData);
  });
  afterEach(() => {
    httpMock.verify();
  })







  /*   it('getProducts should return data ',  () => {
    productService.getProducts().subscribe((data) => {
      expect(data).toEqual(productData);
    })
  }) */






});
