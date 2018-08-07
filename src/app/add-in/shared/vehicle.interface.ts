export enum VehicleType {
  car = 'CARRO',
  bike = 'MOTO'
}

export interface Vehicle {
  id: string;
  type: VehicleType;
  engine?: string;
}
