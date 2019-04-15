import { GrowerActionTypes, GrowerActions } from './grower.actions';
import { GrowerState } from './grower.model';

export const initialState = <GrowerState>{
  updating: false,
  loading: false,
  propagation: {
    slots: []
  },
  funds: 0,
  greenhouse: {
    lanes: []
  },
  name: 'John Doe',
  seeds: [],
  ward: {}
};

export function growerReducer(
  state: GrowerState = initialState,
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
