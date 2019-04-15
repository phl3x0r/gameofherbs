import { GameState } from '..';

import { createSelector } from '@ngrx/store';

import { UIState } from './ui.reducer';

export const selectUIState = (state: GameState) => state.ui;
export const selectGrower = (state: GameState) => state.grower;

export const selectSelectedTab = createSelector(
  selectUIState,
  (state: UIState) => state.selectedTab
);

export const selectIsLoggedIn = createSelector(
  selectUIState,
  (state: UIState) => state.isLoggedIn
);
