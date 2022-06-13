import * as functions from "firebase-functions";
import { log } from "logger";

export * from "client";
export * from "user";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  log("123");
  response.send("Hello from Firebase!");
});
