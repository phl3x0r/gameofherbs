import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
  GrowerActionTypes,
  GrowerActions,
  UpdateGrower,
  SaveGrower,
  NewGrower,
  LoadGrower
} from './grower.actions';
import { switchMap, map, tap, filter } from 'rxjs/operators';
import {
  AngularFirestore,
  Action,
  DocumentSnapshot
} from '@angular/fire/firestore';
import { iif, of } from 'rxjs';
import { Grower } from 'shared/interfaces';

@Injectable()
export class GrowerEffects {
  constructor(
    private actions$: Actions<GrowerActions>,
    private fireStore: AngularFirestore
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

  // @Effect()
  // updateGrower$ = this.actions$.pipe(
  //   ofType(GrowerActionTypes.UPDATE_GROWER),
  //   map((action: UpdateGrower) => action.payload),
  //   switchMap(payload =>
  //     iif(
  //       () => payload.snapshot.exists,
  //       of(new SaveGrower({ grower: payload.snapshot.data() })),
  //       of(new NewGrower({ uid: payload.uid }))
  //     )
  //   )
  // );

  // @Effect({ dispatch: false })
  // newGrower$ = this.actions$.pipe(
  //   ofType(GrowerActionTypes.NEW_GROWER),
  //   map((action: NewGrower) => action.payload),
  //   map(payload =>
  //     this.fireStore
  //       .collection<Grower>(`growers`)
  //       .doc(payload.uid)
  //       .set({ uid: payload.uid })
  //   )
  // );
}
