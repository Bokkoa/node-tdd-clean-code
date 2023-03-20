import { VehicleModel } from '../domain/models/vehicleModel'
import vehicleRepository from '../domain/repositories/vehicleRepository'
export class VehicleService {
  async create (vehicle: VehicleModel): Promise<any> {
    return await vehicleRepository.create(vehicle)
  }
}

export default new VehicleService()
