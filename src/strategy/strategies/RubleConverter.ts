import { StrategyInterface } from "./StrategyInterface";

export class RubleConverter extends StrategyInterface<number> {
  private readonly price = 0.89;

  public execute(value: number): number {
    return this.price * value;
  }
}
