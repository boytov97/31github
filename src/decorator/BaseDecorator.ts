import { NotifierInterface } from "./NotifierInterface";

export abstract class BaseDecorator {
  public constructor(protected readonly notifier: NotifierInterface) {}
}
