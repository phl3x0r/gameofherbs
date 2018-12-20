import { Action } from '@ngrx/store';
import { Grower } from '@shared/interfaces';

export enum GrowerActionTypes {
  LOAD_GROWER = '[Grower] Load',
  LOAD_GROWER_SUCCESS = '[Grower] Load Success',
  LOAD_GROWER_FAIL = '[Grower] Load Fail'
}

export class LoadGrower implements Action {
  readonly type = GrowerActionTypes.LOAD_GROWER;
}

export class LoadGrowerSuccess implements Action {
  readonly type = GrowerActionTypes.LOAD_GROWER_SUCCESS;
  constructor(public payload: Grower) {}
}

export class LoadGrowerFail implements Action {
  readonly type = GrowerActionTypes.LOAD_GROWER_FAIL;
}

export type GrowerActions = LoadGrower | LoadGrowerSuccess | LoadGrowerFail;
