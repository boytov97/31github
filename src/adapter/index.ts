import { CalculateOrderService } from "./CalculateOrderService";
import { CalculationAdapter } from "./CalculationAdapter";

export const inlzApadter = async () => {
  const order = `{"id": 1, "cart_id": "HFYUDUE", "items": [{"id": 1, "title": "Ball", "price": 145.5}, {"id": 1, "title": "T-Shirt", "price": 890.1}], "used_discount": {"id": 1, "code": "GDTRUEJD", "value": 100}}`;

  const calculationResult = new CalculationAdapter(
    new CalculateOrderService()
  ).calculate(order);

  console.log(calculationResult);

  return Promise.resolve({});
};
