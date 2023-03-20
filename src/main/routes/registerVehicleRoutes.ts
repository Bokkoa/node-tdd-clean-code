import { Router } from 'express'
import { AdapterRoute } from '../adapters/expressAdapter'
import { makeRegisterVehicleController } from '../factories/vehicle'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/register-vehicle', AdapterRoute(makeRegisterVehicleController()))
}
