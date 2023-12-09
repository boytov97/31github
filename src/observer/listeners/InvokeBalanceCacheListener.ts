import { CustomerBalanceUpdatedEvent } from "../events/CustomerBalanceUpdatedEvent";
import { ListenerInterface } from "./ListenerInterface";

export class InvokeBalanceCacheListener extends ListenerInterface {
  public execute(event: CustomerBalanceUpdatedEvent): void {
    console.log("customer balance cache is invoked");
  }
}
