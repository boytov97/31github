import { EventInterface } from "./events/EventInterface";
import { EventManagerInterface } from "./EventManagerInterface";
import { ListenerInterface } from "./listeners/ListenerInterface";

export class EventManager implements EventManagerInterface {
  protected readonly listeners: Map<string, ListenerInterface[]> = new Map();

  public addListener(eventName: string, listener: ListenerInterface): void {
    if (this.listeners.has(eventName)) {
      const listeners = this.listeners.get(eventName);

      if (listeners) {
        listeners.push(listener);

        this.listeners.set(eventName, listeners);
      }
    } else {
      this.listeners.set(eventName, [listener]);
    }
  }

  public dispatch(event: EventInterface): void {
    if (this.listeners.has(event.eventName)) {
      const listeners = this.listeners.get(event.eventName);

      if (listeners) {
        listeners.map((listener) => listener.execute(event));
      }
    }
  }
}
