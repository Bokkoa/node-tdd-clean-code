import { Bird, Eagle, Penguin } from '../domain/models/bird'

describe('Fly bird', () => {
  test('Should fly', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 30,
      origin: 'North America'
    })

    expect(bird.fly()).toEqual('Bird')
  })

  test('Should fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origin: 'North America'
    })

    expect(eagle.fly()).toEqual('Eagle')
  })

  test('penguin Shouldnt fly', () => {
    const penguin = new Penguin({
      name: 'penguin',
      age: 30,
      origin: 'North America'
    })

    expect(penguin.fly()).toEqual(new Error('This bird can\'t fly'))
  })

  test('penguin can swim', () => {
    const penguin = new Penguin({
      name: 'penguin',
      age: 30,
      origin: 'North America'
    })

    expect(penguin.walk()).toEqual('I can walk')
    expect(penguin.swim()).toEqual('I can swim')
  })
})
