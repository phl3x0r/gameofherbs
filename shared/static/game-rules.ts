import {
  ProductTypes,
  PropagationChamber,
  Slot,
  Product
} from 'shared/interfaces';
import { GrowerState } from '@grower';

export const GameRules = {
  products: {
    [ProductTypes.PROPAGATION_CHAMBER]: <ProductRules>{
      productType: ProductTypes.PROPAGATION_CHAMBER,
      name: 'Propagation Chamber',
      description: 'A brand new propagation chamber',
      factory: (): PropagationChamber => ({
        level: 1,
        slots: [<Slot>{ isActive: false }],
        enabled: false
      }),
      maxAmount: 5,
      maxLevel: 5,
      cost: {
        baseCost: 150,
        multiplier: 2
      },
      levels: {
        1: {
          efficiency: 1.0,
          slots: <ProductRules>{
            maxAmount: 4,
            cost: {
              baseCost: 50,
              multiplier: 2
            }
          }
        },
        2: {
          efficiency: 1.1,
          slots: <ProductRules>{
            maxAmount: 6,
            cost: {
              baseCost: 50,
              multiplier: 2
            }
          },
          upgradeCost: 500
        }
      }
    }
  }
};

export const getProductInfo = (
  productType: ProductTypes,
  level = 0
): ProductInfo => {
  const product = GameRules.products[productType];
  return {
    name: product.name,
    description: product.description,
    cost: calculateProductCost(productType, level)
  };
};

export const checkGameRules = (
  product: ProductTypes,
  level: number,
  growerState: GrowerState
) => {
  const productRules = GameRules.products[product];
  const belowMax =
    level === 0
      ? !growerState.products[product] ||
        growerState.products[product].length < productRules.maxAmount
      : level < productRules.maxLevel;
  return belowMax;
};

export const calculateProductCost = (product: ProductTypes, level: number) => {
  const productRules = GameRules.products[product];
  const productCost =
    productRules.cost.baseCost * Math.pow(level, productRules.cost.multiplier);
  return productCost;
};

export interface ProductRules {
  name: string;
  description: string;
  maxLevel: number;
  levels: { [key: number]: ProductLevelRules };
  maxAmount: number;
  cost: ProductCostRules;
  factory: <T extends Product>() => T;
}

export interface ProductLevelRules {
  slots: ProductRules;
  upgradeCost?: number;
  efficiency?: number;
}

export interface ProductCostRules {
  baseCost: number;
  multiplier: number;
}

export interface ProductInfo {
  name: string;
  description: string;
  cost: number;
}
