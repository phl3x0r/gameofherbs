import { GameState } from '..';
import { createSelector } from '@ngrx/store';
import { ProductTypes, Product } from 'shared';

export const selectGrowerState = (state: GameState) => state.grower;

export const selectProduct = <T extends Product>(productType: ProductTypes) =>
  createSelector(
    selectGrowerState,
    grower => grower.products[productType] as T[]
  );

export const selectSeeds = createSelector(
  selectGrowerState,
  grower => grower.seeds
);
