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
import { StaticState, staticReducer } from './static';

export interface GameState {
  ui: UIState;
  grower: GrowerState;
  statics: StaticState;
}

export const reducers: ActionReducerMap<GameState> = {
  ui: uiReducer,
  statics: staticReducer,
  grower: growerReducer
};

export const metaReducers: MetaReducer<GameState>[] = !environment.production
  ? []
  : [];
