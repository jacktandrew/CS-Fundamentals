const { getNthNumber, getSequence } = require('./fibonacci')

describe('fibonacci', () => {
  test('should get the number at nth position', () => {
    const ninthNumber = 34
    expect(getNthNumber(9)).toBe(ninthNumber)
  })

  test('should get the sequence up to the nth position', () => {
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    expect(getSequence(9)).toStrictEqual(sequence)
  })
})