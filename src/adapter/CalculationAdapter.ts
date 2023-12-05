import { plainToInstance } from "class-transformer";
import {
  CalculateOrderServiceInterface,
  CalculationResult,
} from "./CalculateOrderServiceInterface";
import { OrderEntity } from "./OrderEntity";

export class CalculationAdapter {
  public constructor(
    private readonly calculateOrderService: CalculateOrderServiceInterface
  ) {}

  public calculate(order: string): CalculationResult {
    const plain = JSON.parse(order);

    return this.calculateOrderService.execute(
      plainToInstance(OrderEntity, plain, {
        exposeDefaultValues: true,
        excludeExtraneousValues: true,
      })
    );
  }
}
