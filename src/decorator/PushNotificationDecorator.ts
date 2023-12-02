import { BaseDecorator } from "./BaseDecorator";
import { NotifierInterface } from "./NotifierInterface";

export class PushNotificationDecorator
  extends BaseDecorator
  implements NotifierInterface
{
  public send(message: string): void {
    console.log(`Sending message: ${message} as push notification`);

    this.notifier.send(message);
  }
}
