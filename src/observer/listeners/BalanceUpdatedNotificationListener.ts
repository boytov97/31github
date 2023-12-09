import { CustomerBalanceUpdatedEvent } from "../events/CustomerBalanceUpdatedEvent";
import { ListenerInterface } from "./ListenerInterface";

export class BalanceUpdatedNotificationListener extends ListenerInterface {
  public execute(event: CustomerBalanceUpdatedEvent): void {
    console.log("Notification to customer is sent");
  }
}
