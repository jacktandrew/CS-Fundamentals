const quickSort = require('./quickSort')

describe('quickSort', () => {
  const words = ['angel', 'cut', 'bone', 'ax', 'a', 'an', 'bat', 'cargo', 'apple']
  const numbers = [8, 1000, 55, 88, 12, 9, 255]

  test('should sort a list of numbers', () => {
    const sorted = [8, 9, 12, 55, 88, 255, 1000]
    expect(quickSort(numbers)).toMatchObject(sorted)
  })

  test('should sort a list of words', () => {
    const sorted = ['a', 'an', 'angel', 'apple', 'ax', 'bat', 'bone', 'cargo', 'cut']
    expect(quickSort(words)).toMatchObject(sorted)
  })
})
