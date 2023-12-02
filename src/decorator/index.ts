import { EmailNotificationDecorator } from "./EmailNotificationDecorator";
import { PushNotificationDecorator } from "./PushNotificationDecorator";
import { SmsDecorator } from "./SmsDecorator";

export const inlzDecorator = async () => {
  const smsDecorator = new SmsDecorator();
  const emailNotifier = new EmailNotificationDecorator(smsDecorator);
  const pushNotifier = new PushNotificationDecorator(emailNotifier);

  pushNotifier.send("You have been choosen as the challenge winner 31github!");

  return Promise.resolve({});
};
