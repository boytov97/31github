import { DiscountEntity } from "./DiscountEntity";
import { ProductEntity } from "./ProductEntity";

export class OrderEntity {
  public id!: number;

  public cartId!: string;

  public items!: ProductEntity[];

  public usedDiscount!: DiscountEntity;
}
