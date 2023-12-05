import { Expose } from "class-transformer";

export class ProductEntity {
  @Expose()
  public id!: number;

  @Expose()
  public title!: string;

  @Expose()
  public price!: number;
}
