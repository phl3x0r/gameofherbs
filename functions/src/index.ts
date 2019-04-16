import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Grower, ProductBuyOrder, ProductPriceList } from '../../shared';

admin.initializeApp(functions.config().firebase);

export const createGrower = functions.auth.user().onCreate((user, _context) => {
  const doc = admin.firestore().doc(`growers/${user.uid}`);
  return doc.set(<Grower>{
    funds: 1000,
    name: 'Farmer Joe'
  });
});

export const buyProduct = functions.https.onCall(
  (order: ProductBuyOrder, context) => {
    const product = ProductPriceList[order.product.id];
    if (!product) {
      throw new functions.https.HttpsError(
        'not-found',
        'no product for order: ' + order.product.id
      );
    }
    const cost = product.cost;
    const grower = admin.firestore().doc(`growers/${context.auth.uid}`);
    return grower.get().then(growerSnap => {
      const funds = growerSnap.get('funds') as number;
      if (funds >= cost) {
        return grower.set({ ...growerSnap.data(), funds: funds - cost });
      } else {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Insufficient funds'
        );
      }
    });
  }
);
