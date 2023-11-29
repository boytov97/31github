import { StrategyInterface } from "./StrategyInterface";

export class DollarConverter extends StrategyInterface<number> {
  private readonly price = 89.9;

  public execute(value: number): number {
    return this.price * value;
  }
}
