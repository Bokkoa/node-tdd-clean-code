import { HttpRequest, HttpResponse } from '../interfaces/httpInterface'
import { MissingFormalParameterException } from '../errors/clientError'
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']

    for (const prop of requiredProperties) {
      if (!httpRequest.body[prop]) {
        return {
          statusCode: 400,
          body: new MissingFormalParameterException(prop)
        }
      }
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}
