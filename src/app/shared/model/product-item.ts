import { RawMaterial } from './raw-material';



export interface ProductItem {
  productItemId: string,
  productCode: string,
  productName: string,
  sku: string,
  specId: string,
  company: string,
  categoryType: string,
  status: string,
  items: Item[],
  createdDatetime: Date,
  updatedDatetime: Date,
}

export class ProductItem implements ProductItem{
  constructor(
    public productItemId: string,
    public productCode: string,
    public productName: string,
    public sku: string,
    public specId: string,
    public company: string,
    public categoryType: string,
    public status: string,
    public items: Item[],
    public createdDatetime: Date,
    public updatedDatetime: Date,
  ) {}
}

export class Item {
  constructor(
    public rawMaterials: RawMaterial[],
    public attribute: string
  ) {}
}
