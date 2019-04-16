import { Seeds } from './seeds';

export interface Grower {
  uid?: string;
  name: string;
  funds: number;
  propagation?: Propagation;
  ward?: Ward;
  greenhouse?: Greenhouse;
  seeds?: Seeds[];
}

export interface Ward {
  chambers: WardChamber[];
}

export interface Propagation {
  chambers: PropagationChamber[];
}

export interface PropagationChamber {
  slots: Slot[];
}

export interface Slot {
  herbId?: string;
  cost: number;
  isActive: boolean;
}

export interface WardChamber {
  slots: Slot[];
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
