import { FoodHelper } from '../../helpers/foodHelper'
export class Food {
  constructor (
    private readonly food: FoodHelper
  ) {
  }

  getName (): string {
    return this.food.name
  }

  getDescription (): string {
    return this.food.description
  }

  getPrice (): number {
    return this.food.price
  }

  getInventory (): number {
    return this.food.inventory
  }

  getFood (): any {
    return Object.assign(this, this.food)
  }
}
