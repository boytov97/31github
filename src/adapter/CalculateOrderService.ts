import {
  CalculateOrderServiceInterface,
  CalculationResult,
} from "./CalculateOrderServiceInterface";
import { OrderEntity } from "./OrderEntity";

export class CalculateOrderService extends CalculateOrderServiceInterface {
  public execute(order: OrderEntity): CalculationResult {
    return new CalculationResult();
  }
}
