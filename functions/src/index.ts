/* eslint-disable quotes */
import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
	console.log(req, res);
});
