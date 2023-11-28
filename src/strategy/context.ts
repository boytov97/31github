import { StrategyInterface } from "./strategies/StrategyInterface";

export class Context {
  public constructor(protected strategy: StrategyInterface) {}

  public setStrategy(strategy: StrategyInterface): void {
    this.strategy = strategy;
  }

  public execute(params: object): void {
    this.strategy.execute(params);
  }
}
