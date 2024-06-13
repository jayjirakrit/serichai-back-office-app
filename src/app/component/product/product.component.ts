import { Component, Input, OnInit } from '@angular/core';
import { ProductRequest } from '../../shared/model/client/product-request';
import { ProductResponse } from '../../shared/model/client/product-response';
import { Product } from '../../shared/model/product';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products?: Product[];
  productName: string = '';
  productCode: string = '';
  categoryType: string = '';
  selectedProduct?: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  searchProduct() {
    const productSearchCriteria: ProductRequest = {
      productName: this.productName,
      productCode: this.productCode,
      categoryType: this.categoryType,
    };
    this.products = this.productService.getProducts(productSearchCriteria);
    console.log(this.products);
    this.clearSearch();
  }

  clearSearch() {
    this.productName = '';
    this.productCode = '';
    this.categoryType = '';

  }

  clearResult() {
    this.clearSearch();
    this.products = undefined;
  }

  expandProduct(product: Product): void {
    if (this.selectedProduct === undefined) {
      this.selectedProduct = product;
    } else if (this.selectedProduct != product) {
      this.selectedProduct = product;
    } else {
      this.selectedProduct = undefined;
    }
  }
}
