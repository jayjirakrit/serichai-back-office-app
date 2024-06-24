export class Products {
  public items: Product[];
}

export class Product {
  public productId: string;
  public subCode?: string;
  public name?: string;
  public sku?: string;
  public specId?: string;
  public governmentName?: string;
  public company?: string;
  public subCategory?: string;
  public status?: string;
  public image?: string;
  public createdDatetime?: Date;
  public updatedDatetime?: Date;
}
