import { ProductTypes } from 'shared/interfaces';

export const GameRules = {
  products: {
    [ProductTypes.PROPAGATION_CHAMBER]: <ProductRules>{
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

export interface ProductRules {
  maxLevel: number;
  levels: { [key: number]: ProductLevelRules };
  maxAmount: number;
  cost: ProductCostRules;
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

export type EffectType = 'efficiency' | 'capacity';
