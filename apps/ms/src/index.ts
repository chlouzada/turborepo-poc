import * as functions from "firebase-functions";
import { client } from "client";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const clientFunction = functions.https.onRequest((request, response) => {
  client()
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const productFunction = functions.https.onRequest((request, response) => {
  client()
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
