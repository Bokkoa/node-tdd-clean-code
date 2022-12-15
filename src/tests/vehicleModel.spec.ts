import { Vehicle } from '../models/vehicle'

describe('Classes vehicleModel', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new Vehicle('Nissan', 'DXT', 2020)

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
  })
})
