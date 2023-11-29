export abstract class StrategyInterface<T> {
  public abstract execute(arg: T): number;
}
