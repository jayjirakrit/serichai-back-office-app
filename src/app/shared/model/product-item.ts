import { RawMaterial } from './raw-material';

export class ProductItem {
  public productItemId: string;
  public subCode: string;
  public name: string;
  public sku: string;
  public specId: string;
  public company: string;
  public subCategory: string;
  public status: string;
  public items: Item[];
  public createdDatetime: Date;
  public updatedDatetime: Date;
}

export class Item {
  public attributeId: string;
  public attribute: string;
  public rawMaterials: RawMaterial[];
}
