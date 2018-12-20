import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { GrowerActionTypes, LoadGrowerSuccess } from './grower.actions';
import { take, switchMap, switchMapTo, filter, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Grower } from '@shared/interfaces';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private fireStore: AngularFirestore) {}

  @Effect()
  getGrower$ = this.actions$.ofType(GrowerActionTypes.LOAD_GROWER).pipe(
    take(1),
    switchMapTo(
      this.fireStore
        .collection<Grower>('growers', ref => ref.where('id', '==', 'growerId'))
        .valueChanges()
        .pipe(
          filter(x => x && x.length === 1),
          map(growers => new LoadGrowerSuccess(growers[0]))
        )
    )
  );
}
