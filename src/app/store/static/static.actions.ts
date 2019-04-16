import { Action } from '@ngrx/store';
import { Pricelist } from 'shared/interfaces';

export enum StaticActionTypes {
  LOAD_PRICELIST = '[Static] Load Price List from Firestore',
  SAVE_PRICELIST = '[Static] Save Price List to store'
}

export class LoadMarket implements Action {
  readonly type = StaticActionTypes.LOAD_PRICELIST;
  constructor() {}
}

export class SavePricelist implements Action {
  readonly type = StaticActionTypes.SAVE_PRICELIST;
  constructor(public payload: { prices: Pricelist }) {}
}

export type StaticActions = LoadMarket | SavePricelist;
