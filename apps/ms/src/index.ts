import * as functions from "firebase-functions";
import {log} from 'logger'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  log("Hello logs!");
  response.send("Hello from Firebase!");
});
