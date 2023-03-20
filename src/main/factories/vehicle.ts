import { RegisterVehicle } from '../../controllers/registerVehicle/registerVehicle'
import { DbAddAccount } from '../../data/useCases/dbAddAccount'
import { MailNodemailerProvider } from '../../utils-adapters/nodemailer'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const mailProvider = new MailNodemailerProvider()
  const dbAddAccount = new DbAddAccount(mailProvider)
  const registerVehicle = new RegisterVehicle(dbAddAccount)
  return registerVehicle
}
