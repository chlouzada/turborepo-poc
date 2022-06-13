import * as gcpFunctions from "firebase-functions";
import { Application } from "express";
import { server } from "./server";

export const gcp = ({
  functions,
  subscription,
  scheduler,
}:
  | {
      subscription?: never;
      scheduler?: never;
      functions: {
        router: Application;
        serverPath?: string;
      };
    }
  | {
      functions?: never;
      scheduler?: never;
      subscription: any; // FIXME: type
    }
  | {
      functions?: never;
      subscription?: never;
      scheduler: {
        run: (context?: gcpFunctions.EventContext) => void;
        cron: string;
        timeZone?: string;
      }; // FIXME: type
    }) => {
  if (functions) {
    const path = functions.serverPath || "/";
    const app = server(path, functions.router);
    return gcpFunctions.https.onRequest(app);
  }

  if (scheduler) {
    return gcpFunctions.pubsub
      .schedule(scheduler.cron)
      .timeZone(scheduler.timeZone || "America/Sao_Paulo")
      .onRun(scheduler.run);
  }

  const sub = new subscription();
  return gcpFunctions.pubsub
    .topic(subscription.topicName)
    .onPublish((message: gcpFunctions.pubsub.Message) => sub.handler(message));
};
