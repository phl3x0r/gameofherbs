import { Herb } from './herb';

export interface Seeds {
  id: string;
  growerId?: string;
  count: number;
  pA?: Herb;
  pB?: Herb;
}
