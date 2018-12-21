import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Grower } from '@shared/interfaces';
import { growerReducer } from './grower.reducer';
import { DocumentSnapshot, Action } from '@angular/fire/firestore';

export interface GameState {
  grower: Grower;
}

export const reducers: ActionReducerMap<GameState> = {
  grower: growerReducer
};

export const metaReducers: MetaReducer<GameState>[] = !environment.production
  ? []
  : [];

// export const mapToAction = <T>(fa: Action<DocumentSnapshot<T>>) => {
//   return {
//     type: `[${T}]`,
//     payload: fa.payload
//   }
// }
