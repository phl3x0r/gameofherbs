import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Grower } from '@shared/interfaces';

export interface State {
  grower: Grower;
}

export const reducers: ActionReducerMap<State> = {
  grower: undefined
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
