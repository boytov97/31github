import { OrderEntity } from "./OrderEntity";

export class CalculationResult {
  public totalPrice!: number;

  public discountPrice: number | null = null;

  public fullPrice!: number;

  public constructor(
    totalPrice: number,
    discountPrice: number | null,
    fullPrice: number
  ) {
    this.totalPrice = totalPrice;
    this.discountPrice = discountPrice;
    this.fullPrice = fullPrice;
  }
}

export abstract class CalculateOrderServiceInterface {
  public abstract execute(order: OrderEntity): CalculationResult;
}
