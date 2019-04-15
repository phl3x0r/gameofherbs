import { Seeds } from './seeds';

export interface Grower {
  uid?: string;
  name: string;
  funds: number;
  propagation: Propagation;
  ward: Ward;
  greenhouse: Greenhouse;
  seeds: Seeds[];
}

export interface Ward {}

export interface Propagation {
  slots: PropagationSlot[];
}

export interface PropagationSlot {
  herbId?: string;
  cost: number;
  isActive: boolean;
}

export interface Greenhouse {
  lanes: GreenHouseLane[];
}

export interface GreenHouseLane {
  space: number;
  progress: number;
  cost: number;
  isActive: boolean;
}
