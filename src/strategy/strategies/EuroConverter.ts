import { StrategyInterface } from "./StrategyInterface";

export class EuroConverter extends StrategyInterface<number> {
  private readonly price = 97.81;

  public execute(value: number): number {
    return this.price * value;
  }
}
