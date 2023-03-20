import { HttpRequest, HttpResponse } from '../../interfaces/httpInterface'
import { MissingFormalParameterException } from '../../errors/clientError'
import { Controller } from '../../interfaces/controller'
import { serverError, success, badRequest } from '../../helpers/httpHelper'
import { AddAccount } from '../../domain/useCases/addAccount'

export class RegisterVehicle implements Controller {
  constructor (private readonly addAccount: AddAccount) {
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'model', 'year', 'color']
      for (const prop of requiredProperties) {
        if (httpRequest.body[prop] === undefined || httpRequest.body[prop] == null) {
          return badRequest(new MissingFormalParameterException(prop))
        }
      }
      const { name, model, year, color, email, sale } = httpRequest.body
      const vehicle = await this.addAccount.add({ name, model, year, color, email, sale })
      success(vehicle)
    } catch (err) {
      return serverError(err)
    }
  }
}
