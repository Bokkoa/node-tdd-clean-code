import { RegisterVehicle } from '../controllers/registerVehicle'

describe('RegisterVehicle', () => {
  test('if name does not exists return 400', () => {
    // system under test
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'black'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the name'))
  })

  test('if model does not exists return 400', () => {
    // system under test
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020,
        color: 'black'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the model'))
  })

  test('if model\'s year does not exists return 400', () => {
    // system under test
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        // year: 2020
        color: 'black'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the year'))
  })

  test('if model\'s color does not exists return 400', () => {
    // system under test
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'black'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the color'))
  })
})
