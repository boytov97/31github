import { EventInterface } from "../events/EventInterface";

export abstract class ListenerInterface {
  public abstract execute(event: EventInterface): void;
}
