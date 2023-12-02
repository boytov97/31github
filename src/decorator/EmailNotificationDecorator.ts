import { BaseDecorator } from "./BaseDecorator";
import { NotifierInterface } from "./NotifierInterface";

export class EmailNotificationDecorator
  extends BaseDecorator
  implements NotifierInterface
{
  public send(message: string): void {
    console.log(`Sending message: ${message} as email notification`);

    this.notifier.send(message);
  }
}
