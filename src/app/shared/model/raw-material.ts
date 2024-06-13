export class RawMaterial {
  constructor(
    public rawMaterialId: string,
    public name: string,
    public code: string,
    public part: string,
    public color: string,
    public size: string,
    public total: number,
    public unit: string,
    public createdDatetime: Date,
    public updatedDatetime: Date
  ) {}
}
