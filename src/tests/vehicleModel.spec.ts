import { Vehicle } from '../domain/models/vehicle'
import { VehicleHelper } from '../helpers/vehicleHelper'

describe('Classes vehicleModel', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new Vehicle({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 25,
      inInventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getPrice()).toBe(25)
    expect(vehicleModel.getInInventory()).toBe(true)
  })

  it('vehicle helper', () => {
    const vehicle = new VehicleHelper()
    expect(vehicle).toEqual(vehicle)
  })
})
