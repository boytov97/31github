import { NotifierInterface } from "./NotifierInterface";

export class SmsDecorator implements NotifierInterface {
  public send(message: string): void {
    console.log(`Sending message: ${message} as SMS ...`);
  }
}
