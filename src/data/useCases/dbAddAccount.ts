import { AddAccount, AddAccountVehicle } from '../../domain/useCases/addAccount'
import VehicleService from '../../services/vehicleService'
import { MailNodemailerProvider } from '../../utils-adapters/nodemailer'

export class DbAddAccount implements AddAccount {
  constructor (private readonly mailNodemailerProvider: MailNodemailerProvider) {
  }

  async add (vehicle: AddAccountVehicle): Promise<AddAccountVehicle> {
    const vehicleDb = await VehicleService.create(vehicle)
    await this.mailNodemailerProvider.sendMail({
      to: {
        name: vehicle.sale,
        email: vehicle.email
      },
      from: {
        name: 'John Doe',
        email: 'foo@bar.com'
      },
      subject: 'You has been registered a new vehicle',
      body: '<p>Welcome to your dealer!!</p>'
    })
    return await new Promise(resolve => resolve(vehicleDb))
  }
}
