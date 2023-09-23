import vapidHelper from './vapid-helper.mjs';
import { encrypt } from './encryption-helper.mjs';
import WebPushLib from './web-push-lib.mjs';
import WebPushError from './web-push-error.mjs';
import { SupportedContentEncodings } from './web-push-constants.mjs';

export const webPush = new WebPushLib();

export default {
  WebPushError,
  SupportedContentEncodings,
  encrypt,
  getVapidHeaders: vapidHelper.getVapidHeaders,
  generateVAPIDKeys: vapidHelper.generateVAPIDKeys,
  setGCMAPIKey: webPush.setGCMAPIKey,
  setVapidDetails: webPush.setVapidDetails,
  generateRequestDetails: webPush.generateRequestDetails,
  sendNotification: webPush.sendNotification.bind(webPush),
  webPush,
};
