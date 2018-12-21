import { Action } from '@ngrx/store';
import { Grower, GrowerModel } from '@shared/interfaces';
import { DocumentSnapshot } from '@angular/fire/firestore';

export enum GrowerActionTypes {
  LOAD_GROWER = '[Grower] Load from Firestore',
  UPDATE_GROWER = '[Grower] Updated from Firestore',
  SAVE_GROWER = '[Grower] Save to Store',
  NEW_GROWER = '[Grower] Create New Grower on Firestore',
  CLEAR_GROWER = '[Grower] Clear from Store'
}

export class LoadGrower implements Action {
  readonly type = GrowerActionTypes.LOAD_GROWER;
  constructor(public payload: { uid: string }) {}
}

export class UpdateGrower implements Action {
  readonly type = GrowerActionTypes.UPDATE_GROWER;
  constructor(
    public payload: { snapshot: DocumentSnapshot<GrowerModel>; uid: string }
  ) {}
}

export class SaveGrower implements Action {
  readonly type = GrowerActionTypes.SAVE_GROWER;
  constructor(public payload: { grower: GrowerModel }) {}
}

export class NewGrower implements Action {
  readonly type = GrowerActionTypes.NEW_GROWER;
  constructor(public payload: { uid: string }) {}
}

export class ClearGrower implements Action {
  readonly type = GrowerActionTypes.CLEAR_GROWER;
  constructor() {}
}

export type GrowerActions =
  | LoadGrower
  | UpdateGrower
  | SaveGrower
  | NewGrower
  | ClearGrower;
