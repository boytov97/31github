import { EventManagerInterface } from "./EventManagerInterface";
import { CustomerBalanceUpdatedEvent } from "./events/CustomerBalanceUpdatedEvent";

export class UpdateCustomerPointUsecase {
  public constructor(protected readonly eventManager: EventManagerInterface) {}

  public execute(customerId: number, points: number): void {
    // updating customer points
    console.log("Customer balance updated");

    this.eventManager.dispatch(new CustomerBalanceUpdatedEvent());
  }
}
