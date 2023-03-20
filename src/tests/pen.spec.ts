import { Pen } from '../domain/models/pen'

describe('Pen', () => {
  test('should first', () => {
    const pen = new Pen('Hello world')
    expect(pen.write()).toBe('Hello world')
  })
})
