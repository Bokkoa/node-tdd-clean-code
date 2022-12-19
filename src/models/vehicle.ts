import { VehicleHelper } from '../helpers/vehicleHelper'

export class Vehicle {
  constructor (
    private readonly vehicle: VehicleHelper) { }

  getName (): string {
    return this.vehicle.name
  }

  getModel (): string {
    return this.vehicle.model
  }

  getYear (): number {
    return this.vehicle.year
  }

  getPrice (): number {
    return this.vehicle.price
  }

  getInInventory (): boolean {
    return this.vehicle.inInventory
  }
}
