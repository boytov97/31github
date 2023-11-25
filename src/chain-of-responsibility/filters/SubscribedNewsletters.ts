import { AbstractFilter } from "./AbstractFilter";

export class SubscribedNewsletters extends AbstractFilter {
  public async execute(message: Record<string, any>): Promise<void> {
    /**
     * If customer is not subscribed to newsletters, we will throw the exception
     */
    if (!(await this.isSubscribed(1))) {
      throw new Error("Customer is not subscribed to newsletters");
    }

    // OK
  }

  private async isSubscribed(customerId: number): Promise<boolean> {
    return Promise.resolve(false);
  }
}
