import { GameState } from '..';
import { createSelector } from '@ngrx/store';

export const selectGrowerState = (state: GameState) => state.grower;

export const selectPropagation = createSelector(
  selectGrowerState,
  grower => grower.propagation
);

export const selectSeeds = createSelector(
  selectGrowerState,
  grower => grower.seeds
);
