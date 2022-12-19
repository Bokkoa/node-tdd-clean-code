import { Food } from '../models/food'

describe('Classes foodModel', () => {
  it('Class foodModel', () => {
    const foodModel = new Food({
      name: 'Burguer',
      description: 'So tasty',
      price: 50,
      inventory: 240
    })

    expect(foodModel.getName()).toEqual('Burguer')
    expect(foodModel.getDescription()).toEqual('So tasty')
    expect(foodModel.getPrice()).toBe(50)
    expect(foodModel.getInventory()).toBe(240)
  })
})
