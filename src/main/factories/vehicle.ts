import { RegisterVehicle } from '../../controllers/registerVehicle/registerVehicle'
import { DbAddAccount } from '../../data/useCases/dbAddAccount'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const dbAddAccount = new DbAddAccount()
  const registerVehicle = new RegisterVehicle(dbAddAccount)
  return registerVehicle
}
