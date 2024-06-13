import { Injectable } from '@angular/core';
import { ProductRequest } from '../model/client/product-request';
import { ProductResponse } from '../model/client/product-response';
import { Product } from '../model//product';
import { isStringValid } from '../../util/util';
// import * as fs from 'fs';
import ProductData from '../../../assets/data/products-data.json';

const mapToUndefine = (data: any) => data === null ?  undefined: data;
const productData: Product[] = ProductData.map(
  (data) =>
    new Product(
      String(data.product_id),
      mapToUndefine(data.product_code),
      data.name,
      mapToUndefine(data.sku),
      mapToUndefine(data.spec_id),
      mapToUndefine(data.government_name),
      mapToUndefine(data.company),
      0,
      mapToUndefine(data.sub_category),
      mapToUndefine(data.status),
      new Date(data.created_datetime),
      new Date(data.updated_datetime)
    )
);



@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  getProducts(productQuery: ProductRequest): Product[] {
    return this.query(productQuery, productData);
  }

  query(productQuery: ProductRequest, products: Product[]): Product[] {
    let filterProduct: Product[] = productData;
    if (isStringValid(productQuery.productCode)) {
      filterProduct = filterProduct.filter((product) =>
        product.productCode?.includes(productQuery.productCode)
      );
    }
    if (isStringValid(productQuery.productName)) {
      filterProduct = filterProduct.filter((product) =>
        product.productName?.includes(productQuery.productName)
      );
    }
    if (isStringValid(productQuery.categoryType)) {
      filterProduct = filterProduct.filter((product) =>
        product.categoryType?.includes(productQuery.categoryType)
      );
    }
    return filterProduct;
  }
}
