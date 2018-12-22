import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UIState, uiReducer } from './ui';
import { GrowerState, growerReducer } from './grower';

export interface GameState {
  ui: UIState;
  grower: GrowerState;
}

export const reducers: ActionReducerMap<GameState> = {
  ui: uiReducer,
  grower: growerReducer
};

export const metaReducers: MetaReducer<GameState>[] = !environment.production
  ? []
  : [];
