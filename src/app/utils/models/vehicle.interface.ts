export enum VehicleType {
  car = 'CARRO',
  bike = 'MOTO'
}

export interface Vehicle {
  placa: string;
  tipo: VehicleType;
  cilindraje?: string;
  fechaDeIngreso?: string;
}
