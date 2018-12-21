export interface Grower extends GrowerModel {
  loading: boolean;
  updating: boolean;
}

export interface GrowerModel {
  uid?: string;
}
