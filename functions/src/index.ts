import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {
  Grower,
  ProductBuyOrder,
  GameRules,
  calculateProductCost,
  checkGameRules
} from '../../shared';
import { v4 } from 'uuid';

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
    const product = GameRules.products[order.productType];
    if (!product) {
      throw new functions.https.HttpsError(
        'not-found',
        'no product for order: ' + order.productType
      );
    }
    const cost = calculateProductCost(order.productType, 0);
    const grower = admin.firestore().doc(`growers/${context.auth.uid}`);
    return grower.get().then(growerSnap => {
      if (checkGameRules(order.productType, 0, growerSnap.data())) {
        const products = growerSnap.get('products') || {};
        const newProduct = { ...product.factory(), id: v4() };
        return grower.set({
          ...growerSnap.data(),
          funds: growerSnap.get('funds') - cost,
          products: {
            ...products,
            [order.productType]: [
              ...(products[order.productType] || []),
              newProduct
            ]
          }
        });
      } else {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Insufficient funds'
        );
      }
    });
  }
);
