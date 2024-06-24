import { Component, OnInit } from '@angular/core';
import { ProductRequest } from '../../shared/model/client/product-request';
import { Product, Products } from '../../shared/model/products';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  displayProducts: Product[];
  productName: string = '';
  productCode: string = '';
  categoryType: string = '';
  selectedProduct?: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const productSearchCriteria: ProductRequest = {
      productName: this.productName,
      productCode: this.productCode,
      categoryType: this.categoryType,
    };
    this.productService.getProducts(productSearchCriteria).subscribe({
      next: (data) => {
        this.products = data.items;
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }

  searchProduct() {
    this.displayProducts = this.products;
    if (this.productName != '') {
      this.displayProducts = this.displayProducts.filter((product) =>
        product.name.includes(this.productName)
      );
    }
    if (this.productCode != '') {
      this.displayProducts = this.displayProducts.filter((product) =>
        product.subCode.includes(this.productCode)
      );
    }
    if (this.categoryType != '') {
      this.displayProducts = this.displayProducts.filter((product) =>
        product.subCategory.includes(this.categoryType)
      );
    }
    this.clearSearch();
  }

  clearSearch() {
    this.productName = '';
    this.productCode = '';
    this.categoryType = '';
  }

  clearResult() {
    this.clearSearch();
    this.displayProducts = undefined;
  }
}
