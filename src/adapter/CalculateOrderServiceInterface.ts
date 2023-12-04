import { OrderEntity } from "./OrderEntity";

export class CalculationResult {
  public id!: number;

  public totalPrice!: number;

  public discountPrice!: number;

  public fullPrice!: number;
}

export abstract class CalculateOrderServiceInterface {
  public abstract execute(order: OrderEntity): CalculationResult;
}
