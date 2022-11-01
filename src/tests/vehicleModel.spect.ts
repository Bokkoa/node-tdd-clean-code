import { Vehicle } from '../models/vehicle'

describe('Classes vehicleModel', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new Vehicle()

    expect(vehicleModel.name).toEqual('Nissan')
    expect(vehicleModel.model).toEqual('DXT')
    expect(vehicleModel.year).toBe(2020)
  })
})
