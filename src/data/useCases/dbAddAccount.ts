import { AddAccount, AddAccountVehicle } from '../../domain/useCases/addAccount'
import VehicleService from '../../services/vehicleService'

export class DbAddAccount implements AddAccount {
  async add (vehicle: AddAccountVehicle): Promise<AddAccountVehicle> {
    const vehicleDb = await VehicleService.create(vehicle)
    return await new Promise(resolve => resolve(vehicleDb))
  }
}
