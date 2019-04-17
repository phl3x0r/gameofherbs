import { Action } from '@ngrx/store';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { Grower, ProductTypes, Product } from '@shared';

export enum GrowerActionTypes {
  LOAD_GROWER = '[Grower] Load from Firestore',
  UPDATE_GROWER = '[Grower] Update from Firestore',
  SAVE_GROWER = '[Grower] Save to Store',
  NEW_GROWER = '[Grower] Create New Grower on Firestore',
  CLEAR_GROWER = '[Grower] Clear from Store',
  BUY_PRODUCT = '[Grower] Buy Product',
  BUY_PRODUCT_SUCCESS = '[Grower] Buy Product Success',
  BUY_PRODUCT_FAIL = '[Grower] Buy Product Fail',
  BUY_PRODUCT_ON_FIRESTORE = '[Grower] Buy Product On Firestore'
}

export class LoadGrower implements Action {
  readonly type = GrowerActionTypes.LOAD_GROWER;
  constructor(public payload: { uid: string }) {}
}

export class UpdateGrower implements Action {
  readonly type = GrowerActionTypes.UPDATE_GROWER;
  constructor(
    public payload: { snapshot: DocumentSnapshot<Grower>; uid: string }
  ) {}
}

export class SaveGrower implements Action {
  readonly type = GrowerActionTypes.SAVE_GROWER;
  constructor(public payload: { grower: Grower }) {}
}

export class NewGrower implements Action {
  readonly type = GrowerActionTypes.NEW_GROWER;
  constructor(public payload: { uid: string }) {}
}

export class ClearGrower implements Action {
  readonly type = GrowerActionTypes.CLEAR_GROWER;
  constructor() {}
}

// buy / sell
export class BuyProduct implements Action {
  readonly type = GrowerActionTypes.BUY_PRODUCT;
  constructor(public payload: { productType: ProductTypes }) {}
}

export class BuyProductSuccess implements Action {
  readonly type = GrowerActionTypes.BUY_PRODUCT_SUCCESS;
  constructor(
    public payload: {
      productType: ProductTypes;
      product: Product;
      cost: number;
    }
  ) {}
}

export class BuyProductOnFirestoreSuccess implements Action {
  readonly type = GrowerActionTypes.BUY_PRODUCT_ON_FIRESTORE;
  constructor() {}
}

export class BuyProductFail implements Action {
  readonly type = GrowerActionTypes.BUY_PRODUCT_FAIL;
  constructor() {}
}

export type GrowerActions =
  | LoadGrower
  | UpdateGrower
  | SaveGrower
  | NewGrower
  | ClearGrower
  | BuyProduct
  | BuyProductSuccess
  | BuyProductFail
  | BuyProductOnFirestoreSuccess;
