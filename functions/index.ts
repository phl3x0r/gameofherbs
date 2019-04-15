import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Grower } from '../shared/interfaces';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

// export const createNewGrower = functions.https.onCall((data, context) => functions.firestore.document)

admin.initializeApp();

export const createGrower = functions.auth.user().onCreate((user, context) => {
  const doc = admin.firestore().doc(`growers/${context.auth.uid}`);
  return doc.set(<Grower>{
    funds: 1000,
    name: 'Farmer Joe',
    propagation: {
      chambers: [
        {
          slots: [
            {
              cost: 50,
              isActive: false
            }
          ]
        }
      ]
    },
    ward: {
      chambers: [{ slots: [] }]
    },
    seeds: [{ count: 5, quality: 1 }]
  });
});
