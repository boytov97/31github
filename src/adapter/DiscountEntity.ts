export enum DiscountType {
  PERCENTAGE = "percentage",
  FIXED_AMOUNT = "fixed_amount",
}

export class DiscountEntity {
  public id!: number;

  public code!: string;

  public type!: DiscountType;

  public constructor(id: number, code: string, type: DiscountType) {
    this.id = id;
    this.code = code;
    this.type = type;
  }
}
