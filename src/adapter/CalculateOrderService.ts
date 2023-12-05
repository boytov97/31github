import {
  CalculateOrderServiceInterface,
  CalculationResult,
} from "./CalculateOrderServiceInterface";
import { OrderEntity } from "./OrderEntity";

export class CalculateOrderService extends CalculateOrderServiceInterface {
  public execute(order: OrderEntity): CalculationResult {
    const fullPrice = order.items
      .map((item) => {
        return item.price;
      })
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    let totalPrice = fullPrice;
    let discountPrice = null;
    if (null !== order.usedDiscount) {
      discountPrice = order.usedDiscount.value;
      totalPrice = fullPrice - discountPrice;
    }

    return new CalculationResult(totalPrice, discountPrice, fullPrice);
  }
}
