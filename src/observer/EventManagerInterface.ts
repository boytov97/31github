import { EventInterface } from "./events/EventInterface";
import { ListenerInterface } from "./listeners/ListenerInterface";

export abstract class EventManagerInterface {
  public abstract addListener(
    eventName: string,
    listener: ListenerInterface
  ): void;

  public abstract dispatch(event: EventInterface): void;
}
