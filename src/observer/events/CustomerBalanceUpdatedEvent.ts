import { EventInterface } from "./EventInterface";

export class CustomerBalanceUpdatedEvent extends EventInterface {
  public static EventName: string = "customerBalanceUpdated";

  public readonly eventName: string = CustomerBalanceUpdatedEvent.EventName;
}
