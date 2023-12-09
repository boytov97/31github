import { EventManager } from "./EventManager";
import { UpdateCustomerPointUsecase } from "./UpdateCustomerPointUsecase";
import { CustomerBalanceUpdatedEvent } from "./events/CustomerBalanceUpdatedEvent";
import { BalanceUpdatedNotificationListener } from "./listeners/BalanceUpdatedNotificationListener";
import { InvokeBalanceCacheListener } from "./listeners/InvokeBalanceCacheListener";

export const inlzObserver = async () => {
  const eventManager = new EventManager();
  eventManager.addListener(
    CustomerBalanceUpdatedEvent.EventName,
    new BalanceUpdatedNotificationListener()
  );
  eventManager.addListener(
    CustomerBalanceUpdatedEvent.EventName,
    new InvokeBalanceCacheListener()
  );

  const updateCustomerPointUseCase = new UpdateCustomerPointUsecase(
    eventManager
  );
  updateCustomerPointUseCase.execute(1, 100);

  return Promise.resolve({});
};
