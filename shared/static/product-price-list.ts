import { ProductTypes, Product } from '../interfaces';

export const ProductPriceList: { [id: string]: Product } = {
  [ProductTypes.PROPAGATION_CHAMBER]: {
    id: ProductTypes.PROPAGATION_CHAMBER,
    name: 'Propagation Chamber',
    cost: 50,
    description: 'A brand new propagation chamber'
  }
};
