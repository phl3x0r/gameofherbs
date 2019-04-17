import { GrowerActionTypes, GrowerActions } from './grower.actions';
import { GrowerState } from './grower.model';
import { ProductTypes } from 'shared';

export const initialState = <GrowerState>{
  loading: false,
  products: {
    [ProductTypes.PROPAGATION_CHAMBER]: []
  },
  funds: 0,
  name: 'John Doe',
  seeds: []
};

export function growerReducer(
  state: GrowerState = initialState,
  action: GrowerActions
) {
  switch (action.type) {
    case GrowerActionTypes.LOAD_GROWER:
      return { ...state, loading: true, updating: false };

    // case GrowerActionTypes.UPDATE_GROWER:
    //   return { ...state, loading: false, updating: true };

    case GrowerActionTypes.SAVE_GROWER:
      return { ...state, ...action.payload.grower, loading: false };

    case GrowerActionTypes.CLEAR_GROWER:
      return initialState;

    // buy / sell
    case GrowerActionTypes.BUY_PRODUCT_SUCCESS:
      return {
        ...state,
        products: {
          [action.payload.productType]: [
            ...state.products[ProductTypes.PROPAGATION_CHAMBER],
            action.payload.product
          ]
        }
      };

    default:
      return state;
  }
}
