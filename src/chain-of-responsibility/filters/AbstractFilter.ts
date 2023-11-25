export abstract class AbstractFilter {
  public next: AbstractFilter | null = null;

  public setNext(filter: AbstractFilter): AbstractFilter {
    this.next = filter;

    return this.next;
  }

  public async handle(message: Record<string, any>): Promise<void> {
    await this.execute(message);

    if (null !== this.next) {
      await this.next.handle(message);
    }
  }

  public abstract execute(message: Record<string, any>): Promise<void>;
}
