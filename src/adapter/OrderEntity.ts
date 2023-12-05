import { Expose, Type } from "class-transformer";
import { DiscountEntity } from "./DiscountEntity";
import { ProductEntity } from "./ProductEntity";

export class OrderEntity {
  @Expose({ name: "id" })
  public id!: number;

  @Expose({ name: "cart_id" })
  public cartId!: string;

  @Expose({ name: "items" })
  @Type(() => ProductEntity)
  public items!: ProductEntity[];

  @Expose({ name: "used_discount" })
  @Type(() => DiscountEntity)
  public usedDiscount: DiscountEntity | null = null;
}
