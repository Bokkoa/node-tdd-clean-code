import { IContract } from '../interfaces/IContract'

export class Contract {
  constructor (public contract: IContract) {
    Object.assign(this, contract)
  }

  getId (): string {
    return this.contract.id
  }

  getDateInit (): Date {
    return this.contract.dateInit
  }

  getExpirationDate (): Date {
    return this.contract.expirationDate
  }

  getMonth (): number {
    return this.contract.month
  }

  getMonthlyCost (): number {
    return this.contract.monthlyCost
  }
}

export class ContractPrime extends Contract {
  monthlyDiscount (): number {
    return this.contract.monthlyCost * 0.10
  }
}
