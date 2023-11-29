import { StrategyInterface } from "./strategies/StrategyInterface";

export class Context {
  public constructor(protected strategy: StrategyInterface<number>) {}

  public setStrategy(strategy: StrategyInterface<number>): void {
    this.strategy = strategy;
  }

  public convertPrice(value: number): number {
    return this.strategy.execute(value);
  }
}
