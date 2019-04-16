export interface Pricelist {
  [key: string]: Product;
}
export interface Product {
  id: ProductTypes;
  name: string;
  cost: number;
  description: string;
}
export enum ProductTypes {
  PROPAGATION_CHAMBER = 'propagationChamber'
}

export interface ProductBuyOrder {
  product: Product;
}
