import { Injectable } from '@angular/core';
import {Item, ProductItem } from '../model/product-item';
import ProductItemData from '../../../assets/data/product-items-data.json';
import { RawMaterial } from '../model/raw-material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const mapToUndefine = (data: any) => (data === null ? undefined : data);

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  }),
};

// const productItems1: ProductItem[] = ProductItemData.map(
//   (data) => 
//     new ProductItem(
//       String(data.product_id),
//       mapToUndefine(data.product_code),
//       data.name,
//       mapToUndefine(data.sku),
//       mapToUndefine(data.spec_id),
//       mapToUndefine(data.company),
//       mapToUndefine(data.sub_category),
//       mapToUndefine(data.status),
//       data.items.map(
//         (item) =>
//           new Item(
//             item.raw_materials.map(
//               (rm) =>
//                 new RawMaterial(
//                   String(rm.raw_material_id),
//                   rm.raw_material_name,
//                   mapToUndefine(rm.raw_material_code),
//                   rm.part,
//                   rm.color,
//                   rm.size,
//                   rm.total,
//                   rm.unit,
//                   new Date(rm.created_datetime),
//                   new Date(rm.updated_datetime)
//                 )
//             ),
//             item.attribute
//           )
//       ),
//       new Date(data.updated_datetime),
//       new Date(data.created_datetime)
//     )
// );

@Injectable()
export class ProductItemService {
  // productItems: ProductItem[] = [
  //   {
  //     productItemId: '1',
  //     subCode: '1',
  //     name: 'Product Name',
  //     sku: '',
  //     specId: '',
  //     company: '',
  //     subCategory: '',
  //     status: '',
  //     items: [
  //       {
  //         attribute: 'Size: S',
  //         rawMaterials: [
  //           {
  //             rawMaterialId: '1',
  //             part: 'กระเป๋า',
  //             name: 'กระเป๋าเจาะ',
  //             color: 'ดำ',
  //             size: '',
  //             total: 10,
  //             unit: 'ชิ้น',
  //             createdDatetime: new Date(),
  //             updatedDatetime: new Date(),
  //             code: ''
  //           },
  //         ],
  //       },
  //       {
  //         attribute: 'Size: M',
  //         rawMaterials: [
  //           {
  //             rawMaterialId: '',
  //             part: 'ที่จับ',
  //             name: 'เหล็ก',
  //             color: 'ดำ',
  //             size: '',
  //             total: 5,
  //             unit: 'เมตร',
  //             createdDatetime: new Date(),
  //             updatedDatetime: new Date(),
  //             code: ''
  //           },
  //         ],
  //       },
  //     ],
  //     createdDatetime: new Date(),
  //     updatedDatetime: new Date(),
  //   },
  //   {
  //     productItemId: '2',
  //     subCode: '2',
  //     name: 'Product Name',
  //     sku: '',
  //     specId: '',
  //     company: '',
  //     subCategory: '',
  //     status: '',
  //     items: [
  //       {
  //         attribute: 'Size: S',
  //         rawMaterials: [
  //           {
  //             rawMaterialId: '1',
  //             part: 'กระเป๋า',
  //             name: 'กระเป๋าเจาะ',
  //             color: 'ดำ',
  //             size: '',
  //             total: 10,
  //             unit: 'ชิ้น',
  //             createdDatetime: new Date(),
  //             updatedDatetime: new Date(),
  //             code: ''
  //           },
  //         ],
  //       },
  //       {
  //         attribute: 'Size: M',
  //         rawMaterials: [
  //           {
  //             rawMaterialId: '',
  //             part: '',
  //             name: '',
  //             color: '',
  //             size: '',
  //             total: 0,
  //             unit: '',
  //             createdDatetime: new Date(),
  //             updatedDatetime: new Date(),
  //             code: ''
  //           },
  //         ],
  //       },
  //     ],
  //     createdDatetime: new Date(),
  //     updatedDatetime: new Date(),
  //   },
  // ];


  constructor(private http: HttpClient) {}

  getProductItemByIdOb(productItemId: string):Observable<ProductItem> {
    let url = 'http://localhost:8080/v1/products/product-items/' + productItemId;
    return this.http.get<any>(url, httpOptions).pipe(
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return throwError(
          () => new Error('Something went wrong; please try again later.')
        );
      })
    );
  }

  // getProductItemById(productItemId: string): ProductItem {
  //   return this.query(productItemId, productItems1);
  // }

  // query(
  //   productItemId: string,
  //   productItems: ProductItem[]
  // ): ProductItem | undefined {
  //   let findProductItem = productItems.find(
  //     (productItem) => productItem.productItemId === productItemId
  //   );
  //   return findProductItem;
  // }
}
