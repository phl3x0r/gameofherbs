export interface Pricelist {
  [key: string]: Product;
}
export interface Product {
  id?: ProductTypes;
  name?: string;
  description?: string;
  enabled: boolean;
}
export enum ProductTypes {
  PROPAGATION_CHAMBER = 'propagationChamber'
}

export interface ProductBuyOrder {
  productType: ProductTypes;
}
