import { Expose } from "class-transformer";

export class DiscountEntity {
  @Expose({ name: "id" })
  public id!: number;

  @Expose({ name: "code" })
  public code!: string;

  @Expose({ name: "value" })
  public value!: number;
}
