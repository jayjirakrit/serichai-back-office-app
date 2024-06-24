import { Injectable } from '@angular/core';
import { ProductRequest } from '../model/client/product-request';
import { Product, Products } from '../model/products';
import { isStringValid } from '../../util/util';
import ProductData from '../../../assets/data/products-data.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const mapToUndefine = (data: any) => (data === null ? undefined : data);
// const productData: Product[] = ProductData.map(
//   (data) =>
//     new Product(
//       String(data.product_id),
//       mapToUndefine(data.product_code),
//       data.name,
//       mapToUndefine(data.sku),
//       mapToUndefine(data.spec_id),
//       mapToUndefine(data.government_name),
//       mapToUndefine(data.company),
//       0,
//       mapToUndefine(data.sub_category),
//       mapToUndefine(data.status),
//       new Date(data.created_datetime),
//       new Date(data.updated_datetime)
//     )
// );

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(productQuery: ProductRequest): Observable<Products> {
    // return this.query(productQuery, productData);
    let url = 'http://localhost:8080/rest/api/v1/products';
    return this.http.get<any>(url, httpOptions).pipe(
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return throwError(
          () => new Error('Something went wrong; please try again later.')
        );
      })
    );
  }

  query(productQuery: ProductRequest, products: Product[]): Product[] {
    let filterProduct: Product[] = products;
    if (isStringValid(productQuery.productCode)) {
      filterProduct = filterProduct.filter((product) =>
        product.subCode?.includes(productQuery.productCode)
      );
    }
    if (isStringValid(productQuery.productName)) {
      filterProduct = filterProduct.filter((product) =>
        product.name?.includes(productQuery.productName)
      );
    }
    if (isStringValid(productQuery.categoryType)) {
      filterProduct = filterProduct.filter((product) =>
        product.subCategory?.includes(productQuery.categoryType)
      );
    }
    return filterProduct;
  }
}
