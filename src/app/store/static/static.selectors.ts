import { GameState } from '..';
import { createSelector } from '@ngrx/store';
import { ProductTypes } from 'shared/interfaces';

export const selectStaticState = (state: GameState) => state.statics;

export const selectPricelist = createSelector(
  selectStaticState,
  statics => statics.pricelist
);

export const selectProduct = (product: ProductTypes) =>
  createSelector(
    selectPricelist,
    pricelist => pricelist[product]
  );
