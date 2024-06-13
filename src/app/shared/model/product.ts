export class Product {
  constructor(
    public productId: string,
    public productCode?: string,
    public productName?: string,
    public sku?: string,
    public specId?: string,
    public governmentName?: string,
    public company?: string,
    public quantity?: number,
    public categoryType?: string,
    public status?: string,
    public createdDatetime?: Date,
    public updatedDatetime?: Date
  ) {}
}