import { GrowerActionTypes, GrowerActions } from './grower.actions';
import { Grower } from '@shared/interfaces';

export const initialState = { updating: false, loading: false };

export function growerReducer(
  state: Grower = initialState,
  action: GrowerActions
) {
  switch (action.type) {
    case GrowerActionTypes.LOAD_GROWER:
      return { ...state, loading: true, updating: false };

    case GrowerActionTypes.UPDATE_GROWER:
      return { ...state, loading: false, updating: true };

    case GrowerActionTypes.SAVE_GROWER:
      return { ...state, ...action.payload.grower };

    case GrowerActionTypes.CLEAR_GROWER:
      return initialState;

    default:
      return state;
  }
}
