import { StaticState } from './static.model';
import { StaticActions, StaticActionTypes } from './static.actions';

export const initialState = <StaticState>{
  loading: false,
  pricelist: {}
};

export function staticReducer(
  state: StaticState = initialState,
  action: StaticActions
) {
  switch (action.type) {
    case StaticActionTypes.LOAD_PRICELIST:
      return { ...state, loading: true };

    case StaticActionTypes.SAVE_PRICELIST:
      return { ...state, loading: false, pricelist: action.payload.prices };

    default:
      return state;
  }
}
