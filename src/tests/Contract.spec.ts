import { Contract, ContractPrime } from '../domain/models/contract'

describe('class contractModel', () => {
  it('contract regular 12 month', () => {
    const contract = new Contract({
      id: '#001',
      dateInit: new Date(2023),
      expirationDate: new Date(2023),
      month: 12,
      monthlyCost: 500
    })

    expect(contract.getId()).toBe('#001')
    expect(contract.getDateInit()).toEqual(new Date(2023))
    expect(contract.getExpirationDate()).toEqual(new Date(2023))
    expect(contract.getMonth()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(500)
  })

  it('monthlyDiscount contract prime 24 months', () => {
    const contractPrime = new ContractPrime({
      id: '#001',
      dateInit: new Date(2023),
      expirationDate: new Date(2023),
      month: 12,
      monthlyCost: 500
    })

    expect(contractPrime.monthlyDiscount()).toBe(50)
  })
})
