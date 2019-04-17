import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
  GrowerActionTypes,
  GrowerActions,
  SaveGrower,
  LoadGrower,
  BuyProductSuccess,
  BuyProductFail
} from './grower.actions';
import {
  switchMap,
  map,
  filter,
  withLatestFrom,
  switchMapTo,
  catchError
} from 'rxjs/operators';
import {
  AngularFirestore,
  Action,
  DocumentSnapshot
} from '@angular/fire/firestore';
import { Grower } from 'shared/interfaces';
import { GameState } from '..';
import { Store } from '@ngrx/store';
import { selectGrower } from '../ui';
import {
  GameRules,
  checkGameRules,
  calculateProductCost
} from 'shared/static/game-rules';
import { AngularFireFunctions } from '@angular/fire/functions';
import { of } from 'rxjs';

@Injectable()
export class GrowerEffects {
  constructor(
    private actions$: Actions<GrowerActions>,
    private fireStore: AngularFirestore,
    private store: Store<GameState>,
    private fireFunctions: AngularFireFunctions
  ) {}

  @Effect()
  getGrower$ = this.actions$.pipe(
    ofType(GrowerActionTypes.LOAD_GROWER),
    switchMap((action: LoadGrower) =>
      this.fireStore
        .doc<Grower>(`growers/${action.payload.uid}`)
        .snapshotChanges()
        .pipe(
          filter(fsAction => fsAction.payload.exists),
          map(
            (fsAction: Action<DocumentSnapshot<Grower>>) =>
              new SaveGrower({
                grower: fsAction.payload.data()
              })
          )
        )
    )
  );

  // buy / sell
  @Effect()
  buyProduct$ = this.actions$.pipe(
    ofType(GrowerActionTypes.BUY_PRODUCT),
    withLatestFrom(this.store.select(selectGrower)),
    map(([action, grower]) => {
      if (checkGameRules(action.payload.productType, 0, grower)) {
        const cost = calculateProductCost(action.payload.productType, 0);
        if (grower.funds >= cost) {
          return new BuyProductSuccess({
            productType: action.payload.productType,
            product: GameRules.products[action.payload.productType].factory(),
            cost
          });
        }
      }
    })
  );

  @Effect()
  buyProductOnFirebas$ = this.actions$.pipe(
    ofType(GrowerActionTypes.BUY_PRODUCT_SUCCESS),
    switchMap(action =>
      this.fireFunctions
        .httpsCallable('buyProduct')({
          productType: action.payload.productType
        })
        .pipe(catchError(err => of(new BuyProductFail())))
    )
  );
}
