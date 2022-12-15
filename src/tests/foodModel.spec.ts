import { Food } from '../models/food'

describe('Classes foodModel', () => {
  it('Class foodModel', () => {
    const foodModel = new Food('Burguer', 'So tasty', 50)

    expect(foodModel.getName()).toEqual('Burguer')
    expect(foodModel.getDescription()).toEqual('So tasty')
    expect(foodModel.getPrice()).toBe(50)
  })
})
