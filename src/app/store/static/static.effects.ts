import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
  AngularFirestore,
  Action,
  DocumentSnapshot
} from '@angular/fire/firestore';
import {
  StaticActions,
  StaticActionTypes,
  LoadMarket as LoadPricelist,
  SavePricelist
} from './static.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class StaticEffects {
  constructor(
    private actions$: Actions<StaticActions>,
    private fireStore: AngularFirestore
  ) {}

  @Effect()
  getPricelist$ = this.actions$.pipe(
    ofType(StaticActionTypes.LOAD_PRICELIST),
    switchMap((_action: LoadPricelist) =>
      this.fireStore
        .collection(`pricelist`)
        .get()
        .pipe(
          map(
            action =>
              new SavePricelist({
                prices: action.docs.reduce((acc, cur) => {
                  acc[cur.id] = { id: cur.id, ...cur.data() };
                  return acc;
                }, {})
              })
          )
        )
    )
  );
}
