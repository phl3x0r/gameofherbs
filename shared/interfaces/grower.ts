import { Seeds } from './seeds';
import { Product } from './pricelist';

export interface Grower {
  uid?: string;
  name: string;
  funds: number;
  products: {
    [key: string]: Product[];
  };
  // propagation?: Propagation;
  // ward?: Ward;
  // greenhouse?: Greenhouse;
  seeds?: Seeds[];
}

export interface Ward extends Product {
  chambers: WardChamber[];
}

export interface PropagationChamber extends Product {
  level: number;
  slots: Slot[];
}

export interface Slot extends Product {
  herbId?: string;
  isActive: boolean;
}

export interface WardChamber extends Product {
  slots: Slot[];
}

export interface Greenhouse extends Product {
  lanes: GreenHouseLane[];
}

export interface GreenHouseLane extends Product {
  space: number;
  progress: number;
  cost: number;
  isActive: boolean;
}
